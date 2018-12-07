import React from "react";

const SvgArrowAngleLeft1 = props => (
  <svg viewBox="0 0 25 24" {...props}>
    <title>{"\n        Icon / Arrows / Angle Arrow - left\n    "}</title>
    <defs>
      <path
        className="Arrow-Angle-Left-1_svg__path-01"
        d="M18.9 4.9h3V17.4c0 .828-.666 1.498-1.5 1.498-.829 0-1.5-.675-1.5-1.498V7.9H9.397a1.495 1.495 0 0 1-1.499-1.5c0-.828.676-1.5 1.499-1.5h9.501z"
        id="Arrow-Angle-Left-1_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Arrow-Angle-Left-1_svg__b">
        <use xlinkHref="#Arrow-Angle-Left-1_svg__a" />
      </mask>
      <use
        transform="rotate(-135 14.9 11.9)"
        xlinkHref="#Arrow-Angle-Left-1_svg__a"
      />
      <g mask="url(#Arrow-Angle-Left-1_svg__b)">
        <rect width={24} height={24} />
      </g>
    </g>
  </svg>
);

export default SvgArrowAngleLeft1;
