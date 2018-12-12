import React from "react";

const SvgSearch1 = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Search\n    "}</title>
    <defs>
      <path
        className="Search1_svg__path-01"
        d="M17.293 15.16l6.26 6.26c.592.592.599 1.546.005 2.14-.589.589-1.546.587-2.14-.007l-6.259-6.259a9.511 9.511 0 0 1-5.604 1.816A9.555 9.555 0 0 1 0 9.555a9.555 9.555 0 1 1 17.293 5.606zm-7.738.933a6.538 6.538 0 1 0 0-13.075 6.538 6.538 0 0 0 0 13.075z"
        id="Search1_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Search1_svg__b">
        <use xlinkHref="#Search1_svg__a" />
      </mask>
      <use xlinkHref="#Search1_svg__a" />
      <g mask="url(#Search1_svg__b)">
        <rect width={24} height={24} />
      </g>
    </g>
  </svg>
);

export default SvgSearch1;
