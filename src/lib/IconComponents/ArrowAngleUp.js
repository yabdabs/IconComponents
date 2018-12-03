import React from "react";

const SvgArrowAngleUp = props => (
  <svg width={24} height={26} {...props}>
    <defs>
      <path
        d="M16 9h3v12.502c0 .827-.666 1.498-1.5 1.498-.828 0-1.5-.675-1.5-1.498V12H6.498A1.495 1.495 0 0 1 5 10.5C5 9.672 5.675 9 6.498 9H16z"
        id="Arrow_Angle_-_up_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <mask id="Arrow_Angle_-_up_svg__b">
        <use xlinkHref="#Arrow_Angle_-_up_svg__a" />
      </mask>
      <use transform="rotate(-45 12 16)" xlinkHref="#Arrow_Angle_-_up_svg__a" />
      <g mask="url(#Arrow_Angle_-_up_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgArrowAngleUp;
