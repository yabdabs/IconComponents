import React from "react";

const SvgArrowAngleUp = props => (
  <svg viewBox="0 0 24 26" {...props}>
    <title>{"\n        Arrow Up\n    "}</title>
    <defs>
      <path
        className="Arrow-Angle-Up_svg__path-01"
        d="M16 9h3v12.502c0 .827-.666 1.498-1.5 1.498-.828 0-1.5-.675-1.5-1.498V12H6.498A1.495 1.495 0 0 1 5 10.5C5 9.672 5.675 9 6.498 9H16z"
        id="Arrow-Angle-Up_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Arrow-Angle-Up_svg__b">
        <use xlinkHref="#Arrow-Angle-Up_svg__a" />
      </mask>
      <use transform="rotate(-45 12 16)" xlinkHref="#Arrow-Angle-Up_svg__a" />
      <g mask="url(#Arrow-Angle-Up_svg__b)">
        <rect width={24} height={24} />
      </g>
    </g>
  </svg>
);

export default SvgArrowAngleUp;
