/* eslint-disable react/prop-types */
import React from 'react';

export default function BaseDynamic({ strokeWidth, stroke }) {
  const baseBalloonr = 50;
  const baseBallooncx = 130;
  const baseBallooncy = 130;
  const topRightr = baseBalloonr * 0.6;
  const topRightcx = baseBallooncx * 0.7;
  const topRightcy = baseBallooncy * 0.6;
  const middleRightr = baseBalloonr * 0.6;
  const middleRightcx = baseBallooncx * 0.55;
  const middleRightcy = baseBallooncy * 0.9;
  const bottomRightr = baseBalloonr * 0.6;
  const bottomRightcx = baseBallooncx * 0.7;
  const bottomRightcy = baseBallooncy * 1.1;
  const bottomLeftr = baseBalloonr * 0.5;
  const bottomLeftcx = baseBallooncx * 0.45;
  const bottomLeftcy = baseBallooncy * 1.22;
  const topLeftr = baseBalloonr * 0.5;
  const topLeftcx = baseBallooncx * 0.45;
  const topLeftcy = baseBallooncy * 1.22;

  return (
    <svg>
      <circle
        fill="white"
        r={topLeftr}
        cx={topLeftcx}
        cy={topLeftcy}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <circle
        fill="white"
        r={bottomLeftr}
        cx={bottomLeftcx}
        cy={bottomLeftcy}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <circle
        fill="white"
        r={baseBalloonr}
        cx={baseBallooncx}
        cy={baseBallooncy}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <circle
        fill="white"
        r={topRightr}
        cx={topRightcx}
        cy={topRightcy}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
      <circle
        fill="white"
        r={bottomRightr}
        cx={bottomRightcx}
        cy={bottomRightcy}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />{' '}
      <circle
        fill="white"
        r={middleRightr}
        cx={middleRightcx}
        cy={middleRightcy}
        stroke={stroke}
        strokeWidth={strokeWidth}
      />
    </svg>
  );
}
