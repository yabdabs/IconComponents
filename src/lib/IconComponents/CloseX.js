import React from "react";

const SvgCloseX = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M9 6.862L15.416.445a1.51 1.51 0 0 1 2.14-.001 1.51 1.51 0 0 1-.001 2.14L11.138 9l6.417 6.416a1.51 1.51 0 0 1 .001 2.14 1.51 1.51 0 0 1-2.14-.001L9 11.138l-6.416 6.417a1.51 1.51 0 0 1-2.14.001 1.51 1.51 0 0 1 .001-2.14L6.862 9 .445 2.584A1.51 1.51 0 0 1 .444.444a1.51 1.51 0 0 1 2.14.001L9 6.862z"
        id="Close_X_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <g transform="translate(3 3)">
        <mask id="Close_X_svg__b">
          <use xlinkHref="#Close_X_svg__a" />
        </mask>
        <use xlinkHref="#Close_X_svg__a" />
        <g mask="url(#Close_X_svg__b)">
          <path d="M-3-3h24v24H-3z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgCloseX;
