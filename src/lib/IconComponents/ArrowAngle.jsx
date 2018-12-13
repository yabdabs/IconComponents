import React from "react";

const SvgArrowAngle = props => (
  <svg viewBox="0 0 19 18" {...props}>
    <title>{"\n        Arrow Angle\n    "}</title>
    <defs>
      <path
        className="Arrow-Angle_svg__path-01"
        d="M14.175 3.675h2.25v9.376c0 .62-.5 1.124-1.125 1.124a1.126 1.126 0 0 1-1.125-1.124V5.925H7.048c-.62 0-1.123-.5-1.123-1.125 0-.622.506-1.125 1.123-1.125h7.127z"
        id="Arrow-Angle_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Arrow-Angle_svg__b">
        <use xlinkHref="#Arrow-Angle_svg__a" />
      </mask>
      <use
        transform="rotate(-135 11.175 8.925)"
        xlinkHref="#Arrow-Angle_svg__a"
      />
      <g mask="url(#Arrow-Angle_svg__b)">
        <rect width={18} height={18} />
      </g>
    </g>
  </svg>
);

export default SvgArrowAngle;
