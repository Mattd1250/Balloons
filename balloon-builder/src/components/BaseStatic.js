/* eslint-disable react/prop-types */
import React from 'react';

export default function BaseStatic({ fill }) {
  const currentFill = fill;
  const currentStroke = 'black';
  let currentX;
  let currentY;
  // const currentRadius = Number(document
  // .getElementById('radiusNumber').value);

  function FindCoords(e) {
    currentX = e.clientX;
    currentY = e.clientY;
    document.getElementById(
      'coords',
    ).innerHTML = `x: ${currentX}, y: ${currentY}`;
  }

  document.addEventListener('mousemove', FindCoords);

  return (
    <svg width="235" height="220">
      <circle
        className="baseBackBottom"
        fill={currentFill}
        r="25"
        cx="209"
        cy="30"
        stroke={currentStroke}
        currentStrokeWidth="1"
      />
      {/* <circle
        className="base"
        fill={currentFill}
        r="50"
        cx={135 - 51}
        cy={145 - 51}
        stroke={currentStroke}
        strokeWidth="1"
      />
      <circle
        className="baseBackMiddle"
        fill={currentFill}
        r="25"
        cx="26"
        cy="85"
        stroke={currentStroke}
        strokeWidth="1"
      />

      <circle
        fill={currentFill}
        r="30"
        cx="45"
        cy="40"
        stroke={currentStroke}
        strokeWidth="1"
      />
      <circle
        fill={currentFill}
        r="30"
        cx="45"
        cy="105"
        stroke={currentStroke}
        strokeWidth="1"
      />
      <circle
        fill={currentFill}
        r="30"
        cx="70"
        cy="85"
        stroke={currentStroke}
        strokeWidth="1"
      /> */}
    </svg>
  );
}
