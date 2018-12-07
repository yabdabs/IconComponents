import React from "react";

const SvgMenu = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Icon / Menu\n    "}</title>
    <defs>
      <path
        className="Menu_svg__path-01"
        d="M0 1.5C0 .672.667 0 1.501 0H22.5C23.328 0 24 .666 24 1.5c0 .828-.667 1.5-1.501 1.5H1.5C.672 3 0 2.334 0 1.5zM0 9c0-.828.667-1.5 1.501-1.5H22.5C23.328 7.5 24 8.166 24 9c0 .828-.667 1.5-1.501 1.5H1.5C.672 10.5 0 9.834 0 9zm0 7.5c0-.828.667-1.5 1.501-1.5H22.5c.829 0 1.501.666 1.501 1.5 0 .828-.667 1.5-1.501 1.5H1.5C.672 18 0 17.334 0 16.5z"
        id="Menu_svg__a"
      />
    </defs>
    <g transform="translate(0 3)" fillRule="evenodd">
      <mask id="Menu_svg__b">
        <use xlinkHref="#Menu_svg__a" />
      </mask>
      <use xlinkHref="#Menu_svg__a" />
      <use xlinkHref="#Menu_svg__a" />
      <g mask="url(#Menu_svg__b)">
        <rect width={24} height={24} transform="translate(0 -3)" />
      </g>
    </g>
  </svg>
);

export default SvgMenu;
