import React from "react";

const SvgArrowAngleDown = props => (
  <svg width={24} height={27} {...props}>
    <defs>
      <path
        d="M16 3h3v12.502c0 .827-.666 1.498-1.5 1.498-.828 0-1.5-.675-1.5-1.498V6H6.498A1.495 1.495 0 0 1 5 4.5C5 3.672 5.675 3 6.498 3H16z"
        id="Arrow_Angle_-_down_svg__a"
      />
    </defs>
    <g transform="translate(0 .1)" fill="none" fillRule="evenodd">
      <path d="M0 2h24v24H0z" />
      <mask id="Arrow_Angle_-_down_svg__b" fill="#fff">
        <use xlinkHref="#Arrow_Angle_-_down_svg__a" />
      </mask>
      <use
        fill="#D8D8D8"
        transform="scale(1 -1) rotate(-45 -12.142 0)"
        xlinkHref="#Arrow_Angle_-_down_svg__a"
      />
      <g mask="url(#Arrow_Angle_-_down_svg__b)" fill="#747981">
        <path d="M0 2h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgArrowAngleDown;
