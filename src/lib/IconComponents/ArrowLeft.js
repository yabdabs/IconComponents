import React from "react";

const SvgArrowLeft = props => (
  <svg width={18} height={18} {...props}>
    <defs>
      <path
        d="M4.232 6.375H15.75v2.25H4.382l3.839 3.839a1.122 1.122 0 0 1 0 1.59c-.44.44-1.154.437-1.59 0L1.59 9.017 0 7.425 6.63.795a1.122 1.122 0 0 1 1.59 0c.44.44.438 1.154.001 1.59l-3.99 3.99z"
        id="Arrow_-_left_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h18v18H0z" />
      <g transform="translate(.75 1.5)">
        <mask id="Arrow_-_left_svg__b" fill="#fff">
          <use xlinkHref="#Arrow_-_left_svg__a" />
        </mask>
        <use fill="#D8D8D8" xlinkHref="#Arrow_-_left_svg__a" />
        <g mask="url(#Arrow_-_left_svg__b)" fill="#FFF">
          <path d="M-.75-1.5h18v18h-18z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgArrowLeft;
