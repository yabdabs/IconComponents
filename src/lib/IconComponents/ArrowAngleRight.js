import React from "react";

const SvgArrowAngleRight = props => (
  <svg width={25} height={24} {...props}>
    <defs>
      <path
        d="M13.9 4.9h3v12.5c0 .828-.666 1.498-1.5 1.498-.829 0-1.5-.675-1.5-1.498V7.9H4.397a1.495 1.495 0 0 1-1.499-1.5c0-.828.676-1.5 1.499-1.5h9.501z"
        id="Arrow_Angle_-_right_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <path d="M1 0h24v24H1z" />
      <mask id="Arrow_Angle_-_right_svg__b">
        <use xlinkHref="#Arrow_Angle_-_right_svg__a" />
      </mask>
      <use
        transform="scale(1 -1) rotate(45 38.627 0)"
        xlinkHref="#Arrow_Angle_-_right_svg__a"
      />
      <g mask="url(#Arrow_Angle_-_right_svg__b)">
        <path d="M1 0h24v24H1z" />
      </g>
    </g>
  </svg>
);

export default SvgArrowAngleRight;
