import React from "react";

const Video = () => {
  return (
    <div className="w-full h-auto flex justify-center items-center">
      <video
        className="w-full h-[720px]"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="https://via.placeholder.com/1280x720?text=Loading+Video..."
        style={{ pointerEvents: "none" }}
      >
        <source
          src="https://raw.githubusercontent.com/dhurvthiside/video-host-influcon/main/InfluconWebVideo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default Video;
