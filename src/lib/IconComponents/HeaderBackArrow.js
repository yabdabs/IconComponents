import React from "react";

const SvgHeaderBackArrow = props => (
  <svg width={24} height={32} {...props}>
    <defs>
      <path
        d="M4.232 6.375H15.75v2.25H4.382l3.839 3.839a1.122 1.122 0 0 1 0 1.59c-.44.44-1.154.437-1.59 0L1.59 9.017 0 7.425 6.63.795a1.122 1.122 0 0 1 1.59 0c.44.44.438 1.154.001 1.59l-3.99 3.99z"
        id="Header_Back_Arrow_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <path d="M0 7h18v18H0z" />
      <g transform="translate(.75 8.5)">
        <mask id="Header_Back_Arrow_svg__b">
          <use xlinkHref="#Header_Back_Arrow_svg__a" />
        </mask>
        <use xlinkHref="#Header_Back_Arrow_svg__a" />
        <g mask="url(#Header_Back_Arrow_svg__b)">
          <path d="M-.75-1.5h18v18h-18z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgHeaderBackArrow;
