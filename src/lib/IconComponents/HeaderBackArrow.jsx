import React from "react";

const SvgHeaderBackArrow = props => (
  <svg viewBox="0 0 33 32" {...props}>
    <title>{"\n        Icon / Header / Header Back Arrow\n    "}</title>
    <defs>
      <path
        className="Header-Back-Arrow_svg__path-01"
        d="M14.175 3.675h2.25v9.376c0 .62-.5 1.124-1.125 1.124a1.126 1.126 0 0 1-1.125-1.124V5.925H7.048c-.62 0-1.123-.5-1.123-1.125 0-.622.506-1.125 1.123-1.125h7.127z"
        id="Header-Back-Arrow_svg__a"
      />
    </defs>
    <g transform="translate(0 7)" fillRule="evenodd">
      <mask id="Header-Back-Arrow_svg__b">
        <use xlinkHref="#Header-Back-Arrow_svg__a" />
      </mask>
      <use
        transform="rotate(-135 11.175 8.925)"
        xlinkHref="#Header-Back-Arrow_svg__a"
      />
      <g mask="url(#Header-Back-Arrow_svg__b)">
        <rect width={18} height={18} />
      </g>
    </g>
  </svg>
);

export default SvgHeaderBackArrow;
