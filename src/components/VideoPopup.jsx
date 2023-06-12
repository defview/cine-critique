import React from "react";
import ReactPlayer from "react-player/youtube";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };
  return (
    <div className={`videoPopup ${show ? "visible" : ""}`}>
      <div className="opacityToplayer" onClick={hidePopup}></div>
      <div className="videoPlayer relative w-[800px] aspect-video bg-[#081628] scale-[0.2] transition-all duration-[250ms] ease-in-out">
        <span
          className="absolute -top-[20px] right-0 text-[#7393B3]"
          onClick={hidePopup}
        >
          Close
        </span>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
          // playing={true}
        />
      </div>
    </div>
  );
};

export default VideoPopup;
