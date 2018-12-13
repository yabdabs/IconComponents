import React from "react";

const SvgArrow = props => (
  <svg viewBox="0 0 18 18" {...props}>
    <title>{"\n        Arrow\n    "}</title>
    <defs>
      <path
        className="Arrow_svg__path-01"
        d="M4.232 6.375H15.75v2.25H4.382l3.839 3.839a1.122 1.122 0 0 1 0 1.59c-.44.44-1.154.437-1.59 0L1.59 9.017 0 7.425 6.63.795a1.122 1.122 0 0 1 1.59 0c.44.44.438 1.154.001 1.59l-3.99 3.99z"
        id="Arrow_svg__a"
      />
    </defs>
    <g transform="translate(.75 1.5)" fillRule="evenodd">
      <mask id="Arrow_svg__b">
        <use xlinkHref="#Arrow_svg__a" />
      </mask>
      <use xlinkHref="#Arrow_svg__a" />
      <g mask="url(#Arrow_svg__b)">
        <rect width={18} height={18} transform="translate(-.75 -1.5)" />
      </g>
    </g>
  </svg>
);

export default SvgArrow;
