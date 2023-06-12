import React, { useState } from "react";
import ContentWrapper from "../ContentWrapper";
import Img from "../Img";
import Genres from "../Genres";
import CircleRating from "../CircleRating";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import { useSelector } from "react-redux";
import PosterFallback from "../../assets/no-poster.png";
import dayjs from "dayjs";
import { PlayIcon } from "./Playbtn";
import VideoPopup from "../VideoPopup";

const DetailsBanner = ({ video, crew }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);
  const { mediaType, id } = useParams();
  const { data, loading } = useFetch(`/${mediaType}/${id}`);

  const { url } = useSelector((state) => state.home);
  const _genres = data?.genres?.map((g) => g.id);

  const director = crew?.filter((f) => f.job === "Director");
  const writer = crew?.filter(
    (f) => f.job === "Screenplay" || f.job === "Story" || f.job === "Writer"
  );

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div
      className="w-full bg-[#081628] pt-[100px] mb-[50px] md:mb-0
    md:pt-[120px] min-h-[700px]"
    >
      {!loading ? (
        <>
          {!!data && (
            <React.Fragment>
              <div
                className="w-full h-full absolute top-0 left-0 opacity-[0.1]
              overflow-hidden"
              >
                <Img
                  src={url.backdrop + data.backdrop_path}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div
                className="w-full h-full bg-gradient-to-b from-[#04152d]/5
                to-[#081628]/100 absolute bottom-0 left-0"
              ></div>
              <ContentWrapper>
                <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
                  <div className="flex-shrink-0">
                    {data.poster_path ? (
                      <Img
                        className="w-full block rounded-[12px] md:max-w-[350px]"
                        src={url.backdrop + data.poster_path}
                      />
                    ) : (
                      <Img
                        className="w-full block rounded-[12px] md:max-w-[350px]"
                        src={PosterFallback}
                      />
                    )}
                  </div>
                  <div className="text-[#7393B3] font-chirp font-semibold">
                    <div className="text-[20px] leading-[40px] md:text-[34px] md:leading-[44px]">
                      {`${data.name || data.title} (${dayjs(
                        data?.release_date
                      ).format("YYYY")})`}
                    </div>
                    <div
                      className="text-[16px] leading-[24px] mb-[15px] italic opacity-[0.5]
                    md:text-[20px] md:leading-[28px]"
                    >
                      {data.tagline}
                    </div>
                    <div className="mb-[25px] flex flex-wrap bg">
                      <Genres data={_genres} />
                    </div>
                    <div className="flex items-center gap-[25px] mb-[25px]">
                      <div className="max-w-[70px] md:max-w-[90px]">
                        <CircleRating
                          rating={data.vote_average.toFixed(1)}
                          className="fill-[#FFD700]"
                        />
                      </div>
                      <div
                        onClick={() => {
                          setShow(true);
                          setVideoId(video.key);
                        }}
                        className="playbtn"
                      >
                        <PlayIcon className="w-[60px] md:w-[80px]" />
                        <span className="textWatch">Watch Trailer</span>
                      </div>
                    </div>

                    <div className="mb-[25px]">
                      <div className="text-[24px] mb-[10px] font-chirp font-semibold text-[#FFD700]">
                        Overview
                      </div>
                      <div className="leading-[24px] md:pr-[100px] text-[#7393B3] font-chirp font-medium">
                        {data.overview}
                      </div>
                    </div>

                    <div
                      className="border-b-[1px] border-solid border-[#100C08]
                    py-[15px] px-0 flex"
                    >
                      {data.status && (
                        <div className="mr-[10px] flex flex-wrap">
                          <span className="font-semibold opacity-[1] mr-[10px] leading-[24px] text-[#7393B3]">
                            Status:{" "}
                          </span>
                          <span className="mr-[10px] opacity-[0.5px] leading-[24px] text-[#7393B3]">
                            {data.status}
                          </span>
                        </div>
                      )}
                      {data.release_date && (
                        <div className="mr-[10px] flex flex-wrap">
                          <span className="font-semibold opacity-[1] mr-[10px] leading-[24px] text-[#7393B3]">
                            Release Date:{" "}
                          </span>
                          <span className="mr-[10px] opacity-[0.5px] leading-[24px] text-[#7393B3]">
                            {dayjs(data.release_date).format("DD/MM/YYYY")}
                          </span>
                        </div>
                      )}
                      {data.runtime && (
                        <div className="mr-[10px] flex flex-wrap">
                          <span className="font-semibold opacity-[1] mr-[10px] leading-[24px] text-[#7393B3]">
                            Runtime:{" "}
                          </span>
                          <span className="mr-[10px] opacity-[0.5px] leading-[24px] text-[#7393B3]">
                            {toHoursAndMinutes(data.runtime)}
                          </span>
                        </div>
                      )}
                    </div>

                    {director?.length > 0 && (
                      <div
                        className="border-b-[1px] border-solid border-[#100C08]
                      py-[15px] px-0 flex"
                      >
                        <span className="font-semibold opacity-[1] mr-[10px] leading-[24px] text-[#7393B3]">
                          Director:{" "}
                        </span>
                        <span className="mr-[10px] opacity-[0.5px] leading-[24px] text-[#7393B3]">
                          {director?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {director.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {writer?.length > 0 && (
                      <div
                        className="border-b-[1px] border-solid border-[#100C08]
                      py-[15px] px-0 flex"
                      >
                        <span className="font-semibold opacity-[1] mr-[10px] leading-[24px] text-[#7393B3]">
                          Writer:{" "}
                        </span>
                        <span className="mr-[10px] opacity-[0.5px] leading-[24px] text-[#7393B3]">
                          {writer?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {writer.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}

                    {data?.created_by?.length > 0 && (
                      <div
                        className="border-b-[1px] border-solid border-[#100C08]
                      py-[15px] px-0 flex"
                      >
                        <span className="font-semibold opacity-[1] mr-[10px] leading-[24px] text-[#7393B3]">
                          Creator:{" "}
                        </span>
                        <span className="mr-[10px] opacity-[0.5px] leading-[24px] text-[#7393B3]">
                          {data?.created_by?.map((d, i) => (
                            <span key={i}>
                              {d.name}
                              {data?.created_by.length - 1 !== i && ", "}
                            </span>
                          ))}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <VideoPopup
                  show={show}
                  setShow={setShow}
                  videoId={videoId}
                  setVideoId={setVideoId}
                />
              </ContentWrapper>
            </React.Fragment>
          )}
        </>
      ) : (
        <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
          <ContentWrapper>
            <div className="gap-[50px] flex-row">
              <div
                className="flex-shrink-0 w-full block rounded-[12px]
              aspect-square md:max-w-[350px] skeleton"
              ></div>
              <div className="w-full h-[25px] mb-[20px] rounded-[50px]">
                <div className="w-[75%] mb-[50px] skeleton"></div>
                <div className="w-[75%] mb-[50px] skeleton"></div>
                <div className="w-[50%] mb-[50%] skeleton"></div>
                <div className="w-[50%] mb-[50%]  skeleton"></div>
                <div className="w-[50%] mb-[50%] skeleton"></div>
                <div className="w-[50%] mb-[50%]  skeleton"></div>
                <div className="w-[50%] mb-[50%]  skeleton"></div>
              </div>
            </div>
          </ContentWrapper>
        </div>
      )}
    </div>
  );
};

export default DetailsBanner;
