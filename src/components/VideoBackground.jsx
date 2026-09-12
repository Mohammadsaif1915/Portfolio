import React from 'react';

const VideoBackground = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <div className="video-background-container">
      {/* 
        Place your crazy video in the public/ folder and name it "bg-video.mp4".
        The video will loop automatically.
      */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="video-element"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay to ensure text readability */}
      <div className={`video-overlay ${isDark ? 'video-overlay--dark' : 'video-overlay--light'}`}></div>
    </div>
  );
};

export default VideoBackground;
