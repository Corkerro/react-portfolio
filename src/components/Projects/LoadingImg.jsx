import React from 'react';

const LoadingImg = () => {
  return (
    <svg
      role="img"
      width="484"
      height="240"
      aria-labelledby="loading-aria"
      viewBox="0 0 484 240"
      preserveAspectRatio="none">
      <title id="loading-aria">Loading...</title>
      <rect
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath="url(#clip-path)"
        style={{ fill: 'url(#fill)' }}></rect>
      <defs>
        <clipPath id="clip-path">
          <rect x="0" y="428" rx="15" ry="15" width="90" height="27" />
          <rect x="0" y="0" rx="15" ry="15" width="484" height="240" />
        </clipPath>
        <linearGradient id="fill">
          <stop offset="0.599964" stopColor="#cccccc" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-2; -2; 1"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"></animate>
          </stop>
          <stop offset="1.59996" stopColor="#999" stopOpacity="1">
            <animate
              attributeName="offset"
              values="-1; -1; 2"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"></animate>
          </stop>
          <stop offset="2.59996" stopColor="#cccccc" stopOpacity="1">
            <animate
              attributeName="offset"
              values="0; 0; 3"
              keyTimes="0; 0.25; 1"
              dur="2s"
              repeatCount="indefinite"></animate>
          </stop>
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LoadingImg;
