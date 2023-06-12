import React, { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ContentWrapper from "./ContentWrapper";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import Img from "./Img";
import PosterFallback from "../assets/no-poster.png";
import dayjs from "dayjs";
import CircleRating from "./CircleRating";
import Genres from "./Genres";

const Carousel = ({ data, loading, endpoint, title }) => {
  const carouselContainer = useRef();
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({
      left: scrollAmount,
      behaviour: "smooth",
    });
  };

  const skItem = () => {
    return (
      <div className="w-[125px] md:w-[calc(25%-15px)] lg:md:w-[calc(20%-16px)] flex-shrink-0">
        <div className="posterBlock skeleton"></div>
        <div className="flex flex-col">
          <div className="w-full h-[20px] mb-[10px] skeleton"></div>
          <div className="w-[75%] h-[20px] my-4 skeleton"></div>
        </div>
      </div>
    );
  };

  return (
    <div className="mb-[50px]">
      <ContentWrapper>
        {title && (
          <div className="text-[24px] text-[#FFD700] mb-[20px] font-semibold">
            {title}
          </div>
        )}
        <div className="relative">
          <ArrowCircleLeftIcon
            onClick={() => navigation("left")}
            className="carouselLeftNav arrow md:block"
          />
          <ArrowCircleRightIcon
            onClick={() => navigation("right")}
            className="carouselRighttNav arrow md:block"
          />
          {!loading ? (
            <div
              ref={carouselContainer}
              className="flex gap-[10px] overflow-y-hidden mr-[-20px] ml-[-20px]
            py-0 px-[20px] md:gap-[20px] md:overflow-hidden md:m-0 md:p-0"
            >
              {data?.map((item) => {
                const posterUrl = item.poster_path
                  ? url.poster + item.poster_path
                  : PosterFallback;
                return (
                  <div
                    onClick={() =>
                      navigate(`/${item.media_type || endpoint}/${item.id}`)
                    }
                    key={item.id}
                    className="w-[125px] cursor-pointer md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] flex-shrink-0"
                  >
                    <div className="posterBlock">
                      <Img src={posterUrl} />
                      <div
                        className="w-[40px] h-[40px] absolute -bottom-3 left-4 bg-transparent
                      flex-shrink-0 md:w-[50px] md:h-[50px]"
                      >
                        <CircleRating rating={item.vote_average.toFixed(1)} />
                      </div>
                      <div className="absolute bottom-10 end-3">
                        <Genres data={item.genre_ids.slice(0, 4)} />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <span
                        className="font-chirp font-medium text-[#7393B3]
                      w-full h-[20px] text-sm"
                      >
                        {item.title || item.name}
                      </span>
                      <span className="w-[75%] h-[20px] my-4 font-chirp font-medium text-[#7393B3] text-sm">
                        {dayjs(item?.release_Date).format("MMM D, YYYY")}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div
              className="flex gap-[10px] overflow-y-hidden mr-[-20px]
            ml-[-20px] py-0 px-[20px] md:gap-[20px] md:overflow-hidden
            md:m-0 md:p-0"
            >
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
              {skItem()}
            </div>
          )}
        </div>
      </ContentWrapper>
    </div>
  );
};

export default Carousel;
