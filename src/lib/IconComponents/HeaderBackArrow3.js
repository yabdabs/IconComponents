import React from "react";

const SvgHeaderBackArrow3 = props => (
  <svg width={33} height={32} {...props}>
    <defs>
      <path
        d="M14.175 3.675h2.25v9.376c0 .62-.5 1.124-1.125 1.124a1.126 1.126 0 0 1-1.125-1.124V5.925H7.048a1.126 1.126 0 0 1 0-2.25h7.127z"
        id="Header_Back_Arrow_3_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <path d="M6 0h24v32H6z" />
      <g transform="translate(0 7)">
        <path d="M0 0h18v18H0z" />
        <mask id="Header_Back_Arrow_3_svg__b">
          <use xlinkHref="#Header_Back_Arrow_3_svg__a" />
        </mask>
        <use
          transform="rotate(-135 11.175 8.925)"
          xlinkHref="#Header_Back_Arrow_3_svg__a"
        />
        <g mask="url(#Header_Back_Arrow_3_svg__b)">
          <path d="M0 0h18v18H0z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgHeaderBackArrow3;
