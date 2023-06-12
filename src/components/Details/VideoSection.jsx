import React, { useState } from "react";
import ContentWrapper from "../ContentWrapper";
import Img from "../Img";
import VideoPopup from "../VideoPopup";
import { PlayIcon } from "./Playbtn";

const VideosSection = ({ data, loading }) => {
  const [show, setShow] = useState(false);
  const [videoId, setVideoId] = useState(null);

  const loadingSkeleton = () => {
    return (
      <div className="w-[150px] flex-shrink-0 md:w-[25%]">
        <div className="w-full aspect-video rounded-[12px] mb-[10px] skeleton"></div>
        <div className="h-[20px] w-full rounded-[10px] mb-[10px] skeleton"></div>
        <div className="h-[20px] w-[75%] rounded-[10px] skeleton"></div>
      </div>
    );
  };

  return (
    <div className="relative mb-[50px]">
      <ContentWrapper>
        <div className="text-[24px] text-[#FFD700] font-chirp font-bold mb-[25px]">
          Official Videos
        </div>
        {!loading ? (
          <div
            className="flex gap-[10px] overflow-x-auto -mr-[20px] -ml-[20px]
          py-o px-[20px] md:gap-[20px] md:m-0 md:p-0"
          >
            {data?.results?.map((video) => (
              <div
                key={video.id}
                className="w-[150px] flex-shrink-0 md:w-[25%] cursor-pointer"
                onClick={() => {
                  setVideoId(video.key);
                  setShow(true);
                }}
              >
                <div className="videoThumbnail">
                  <Img
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    className="w-full relative block rounded-[12px] transition-all duration-[0.7s] ease-in-out hover:opacity-[0.5]"
                  />
                  <div className="playVid">
                    <PlayIcon />
                  </div>
                </div>
                <div
                  className="text-[#7393B3] text-[14px] leading-[20px] md:text-[16px]
                md:leading-[24px]"
                >
                  {video.name}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="flex gap-[10px] overflow-x-auto -mr-[20px] -ml-[20px]
          py-o px-[20px] md:gap-[20px] md:m-0 md:p-0"
          >
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
            {loadingSkeleton()}
          </div>
        )}
      </ContentWrapper>
      <VideoPopup
        show={show}
        setShow={setShow}
        videoId={videoId}
        setVideoId={setVideoId}
      />
    </div>
  );
};

export default VideosSection;
