import React from "react";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PosterFallback from "../assets/no-poster.png";
import Img from "./Img";
import CircleRating from "./CircleRating";
import Genres from "./Genres";

const MovieCard = ({ data, fromSearch, mediaType }) => {
  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();
  const posterUrl = data.poster_path
    ? url.poster + data.poster_path
    : PosterFallback;
  return (
    <div
      className="w-[calc(50%-5px)] mb-[25px] cursor-pointer flex-shrink-0
      md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)]"
      onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
    >
      <div
        className="relative w-full aspect-[1/1.5] bg-cover bg-center
      flex items-end mb-[30px] justify-between p-[10px] transition-all duration-[0.5s]
      ease-in-out hover:opacity-[0.5]"
      >
        <div
          className="absolute top-0 w-full h-full rounded-[12px]
        overflow-hidden left-0"
        >
          <Img
            className="w-full h-full object-cover object-center"
            src={posterUrl}
          />
        </div>
        {!fromSearch && (
          <React.Fragment>
            <div
              className="w-[40px] h-[40px] relative top-[30px] bg-transparent flex-shrink-0
            md:w-[50px] md:h-[50px]"
            >
              <CircleRating rating={data.vote_average.toFixed(1)} />
            </div>
            <div className="hidden relative md:flex md:flex-wrap md:justify-end">
              <Genres data={data.genre_ids.slice(0, 2)} />
            </div>
          </React.Fragment>
        )}
      </div>
      <div className="text-[#7393B3] flex flex-col">
        <span
          className="font-chirp font-medium text-[16px] mb-[10px]
        leading-[24px] text-ellipsis md:font-[20px]"
        >
          {data.title || data.name}
        </span>
        <span className="text-[14px] opacity-[0.5]">
          {dayjs(data.release_date).format("MMM D, YYYY")}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
