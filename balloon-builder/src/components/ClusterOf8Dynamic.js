import React from 'react';

export default function ClusterOf8({ fill, width, radius }) {
  const center = width / 2;

  const bottomLeftr = radius;
  const bottomLeftcx = center;
  const bottomLeftcy = 150;
  const bottomLeftfill = 'white';
  const bottomRightr = bottomLeftr;
  const bottomRightcx = bottomLeftcx + 65;
  const bottomRightcy = bottomLeftcy + 10;
  const bottomRightfill = 'white';
  const bottomUpperRightr = bottomLeftr - 10;
  const bottomUpperRightcx = bottomLeftcx + 65;
  const bottomUpperRightcy = bottomLeftcy - 35;
  const bottomUpperRightfill = 'white';
  const bottomFrontr = bottomLeftr + 5;
  const bottomFrontcx = bottomLeftcx + 30;
  const bottomFrontcy = bottomLeftcy - 5;
  const bottomFrontfill = 'white';
  const topTopLeftr = radius + 4;
  const topTopLeftcx = center + 55;
  const topTopLeftcy = 50;
  const topTopLeftfill = 'white';
  const topLeftr = topTopLeftr;
  const topLeftcx = topTopLeftcx - 25;
  const topLeftcy = topTopLeftcy + 30;
  const topLeftfill = 'white';
  const topRightr = topTopLeftr;
  const topRightcx = topTopLeftcx + 55;
  const topRightcy = topTopLeftcy + 75;
  const topRightfill = 'white';
  const topFrontr = topTopLeftr + 10;
  const topFrontcx = topTopLeftcx + 30;
  const topFrontcy = topTopLeftcy + 15;
  const topFrontfill = 'white';

  return (
    <svg x="0" y="0">
      <circle
        id="circle1"
        r={bottomLeftr}
        cx={bottomLeftcx}
        cy={bottomLeftcy}
        fill={fill}
        strokeWidth="1"
        stroke="black"
      />
      <circle
        id="circle2"
        r={bottomRightr}
        cx={bottomRightcx}
        cy={bottomRightcy}
        fill={fill}
        strokeWidth="1"
        stroke="black"
      />
      <circle
        id="circle3"
        r={bottomUpperRightr}
        cx={bottomUpperRightcx}
        cy={bottomUpperRightcy}
        fill={fill}
        strokeWidth="1"
        stroke="black"
      />
      <circle
        id="circle4"
        r={bottomFrontr}
        cx={bottomFrontcx}
        cy={bottomFrontcy}
        fill={fill}
        strokeWidth="1"
        stroke="black"
      />
      <circle
        id="circle5"
        r={topTopLeftr}
        cx={topTopLeftcx}
        cy={topTopLeftcy}
        fill={fill}
        strokeWidth="1"
        stroke="black"
      />
      <circle
        id="circle6"
        r={topLeftr}
        cx={topLeftcx}
        cy={topLeftcy}
        fill={fill}
        strokeWidth="1"
        stroke="black"
      />
      <circle
        id="circle7"
        r={topRightr}
        cx={topRightcx}
        cy={topRightcy}
        fill={fill}
        strokeWidth="1"
        stroke="black"
      />
      <circle
        id="circle8"
        r={topFrontr}
        cx={topFrontcx}
        cy={topFrontcy}
        fill={fill}
        strokeWidth="1"
        stroke="black"
      />
    </svg>
  );
}
