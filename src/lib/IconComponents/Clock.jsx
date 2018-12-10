import React from "react";

const SvgClock = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Icon / Clock\n    "}</title>
    <defs>
      <path
        className="Clock_svg__path-01"
        d="M11.947 0c6.594.008 11.939 5.352 11.946 11.947 0 6.598-5.348 11.946-11.946 11.946S0 18.545 0 11.947 5.349 0 11.947 0zm0 21.675a9.739 9.739 0 0 0 9.727-9.727c0-5.373-4.355-9.728-9.727-9.728-5.373 0-9.728 4.355-9.728 9.728 0 5.372 4.355 9.727 9.728 9.727zm5.615-10.49a.832.832 0 0 1-.004 1.664H12.01a.955.955 0 0 1-.895-.902V4.18a.832.832 0 0 1 1.664 0v7.004h4.783z"
        id="Clock_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Clock_svg__b">
        <use xlinkHref="#Clock_svg__a" />
      </mask>
      <use xlinkHref="#Clock_svg__a" />
      <g mask="url(#Clock_svg__b)">
        <rect width={24} height={24} />
      </g>
    </g>
  </svg>
);

export default SvgClock;