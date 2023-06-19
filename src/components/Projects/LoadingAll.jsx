import React from 'react';

const LoadingAll = () => {
  const allTogether = (
    <svg
      role="img"
      width="300"
      height="340"
      aria-labelledby="loading-aria"
      viewBox="0 0 300 340"
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
          <rect x="0" y="0" rx="5" ry="5" width="300" height="24" />
          <rect x="0" y="198" rx="5" ry="5" width="300" height="70" />
          <rect x="60" y="280" rx="15" ry="15" width="180" height="18" />
          <rect x="80" y="310" rx="15" ry="15" width="140" height="28" />
          <rect x="0" y="36" rx="15" ry="15" width="300" height="150" />
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
          <stop offset="1.59996" stopColor="#999999" stopOpacity="1">
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
  return allTogether;
};

export default LoadingAll;
