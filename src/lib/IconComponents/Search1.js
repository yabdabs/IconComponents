import React from "react";

const SvgSearch1 = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M17.293 15.16l6.26 6.26c.592.592.599 1.546.005 2.14-.589.589-1.546.587-2.14-.007l-6.259-6.259a9.511 9.511 0 0 1-5.604 1.816A9.555 9.555 0 0 1 0 9.555a9.555 9.555 0 1 1 17.293 5.606zm-7.738.933a6.538 6.538 0 1 0 0-13.075 6.538 6.538 0 0 0 0 13.075z"
        id="Search_1_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="Search_1_svg__b" fill="#fff">
        <use xlinkHref="#Search_1_svg__a" />
      </mask>
      <use fill="#009BDF" xlinkHref="#Search_1_svg__a" />
      <g mask="url(#Search_1_svg__b)" fill="#747981">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgSearch1;
