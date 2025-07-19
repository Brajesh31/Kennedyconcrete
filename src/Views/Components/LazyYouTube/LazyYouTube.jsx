import React, { useState } from "react";

const LazyYouTube = ({ videoId, title }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  const handleLoadVideo = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div className="video-container">
      {!isIframeLoaded ? (
        <div className="video-thumbnail" onClick={handleLoadVideo}>
          <img src={thumbnailUrl} alt={title} />
          <div className="play-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          title={title}
          alt={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      <h2 className="text-light text-center mt-3">{title}</h2>
    </div>
  );
};

export default LazyYouTube;
