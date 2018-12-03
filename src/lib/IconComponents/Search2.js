import React from "react";

const SvgSearch2 = props => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        d="M11.529 10.107L15.7 14.28a1.006 1.006 0 1 1-1.422 1.422l-4.173-4.173a6.37 6.37 0 1 1 1.422-1.422zm-5.16.621a4.358 4.358 0 1 0 0-8.716 4.358 4.358 0 0 0 0 8.716z"
        id="Search_2_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Search_2_svg__b">
        <use xlinkHref="#Search_2_svg__a" />
      </mask>
      <use xlinkHref="#Search_2_svg__a" />
      <g mask="url(#Search_2_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
);

export default SvgSearch2;
