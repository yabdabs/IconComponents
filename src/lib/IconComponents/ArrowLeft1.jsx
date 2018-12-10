import React from "react";

const SvgArrowLeft1 = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Icon / Arrows / Arrow - left\n    "}</title>
    <defs>
      <path
        className="Arrow-left-1_svg__path-01"
        d="M5.642 8.5H21v3H5.843l5.118 5.118c.585.585.589 1.53 0 2.12a1.502 1.502 0 0 1-2.12.002l-6.72-6.72L0 9.9l8.84-8.84a1.495 1.495 0 0 1 2.12 0c.586.586.583 1.539.001 2.12L5.642 8.5z"
        id="Arrow-left-1_svg__a"
      />
    </defs>
    <g transform="translate(1 2)" fillRule="evenodd">
      <mask id="Arrow-left-1_svg__b">
        <use xlinkHref="#Arrow-left-1_svg__a" />
      </mask>
      <use xlinkHref="#Arrow-left-1_svg__a" />
      <g mask="url(#Arrow-left-1_svg__b)">
        <rect width={24} height={24} transform="translate(-1 -2)" />
      </g>
    </g>
  </svg>
);

export default SvgArrowLeft1;