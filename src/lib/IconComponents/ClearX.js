import React from "react";

const SvgClearX = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M12 10.574L7.723 6.297a1.006 1.006 0 0 0-1.427 0 1.006 1.006 0 0 0 0 1.426L10.575 12l-4.277 4.277a1.006 1.006 0 0 0 0 1.427 1.006 1.006 0 0 0 1.426 0L12 13.425l4.277 4.277a1.006 1.006 0 0 0 1.427 0 1.006 1.006 0 0 0 0-1.426L13.425 12l4.277-4.277a1.006 1.006 0 0 0 0-1.427 1.006 1.006 0 0 0-1.426 0L12 10.575zM12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12z"
        id="Clear_X_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Clear_X_svg__b">
        <use xlinkHref="#Clear_X_svg__a" />
      </mask>
      <use xlinkHref="#Clear_X_svg__a" />
      <g mask="url(#Clear_X_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgClearX;
