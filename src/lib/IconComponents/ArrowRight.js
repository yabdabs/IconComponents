import React from "react";

const SvgArrowRight = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M5.642 8.5H21v3H5.843l5.118 5.118c.585.585.589 1.53 0 2.12a1.502 1.502 0 0 1-2.12.002l-6.72-6.72L0 9.9l8.84-8.84a1.495 1.495 0 0 1 2.12 0c.586.586.583 1.539.001 2.12L5.642 8.5z"
        id="Arrow_-_right_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <g transform="translate(2 2)">
        <mask id="Arrow_-_right_svg__b" fill="#fff">
          <use xlinkHref="#Arrow_-_right_svg__a" />
        </mask>
        <use
          fill="#D8D8D8"
          transform="matrix(-1 0 0 1 21 0)"
          xlinkHref="#Arrow_-_right_svg__a"
        />
        <g mask="url(#Arrow_-_right_svg__b)" fill="#747981">
          <path d="M-2-2h24v24H-2z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgArrowRight;
