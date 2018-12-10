import React from "react";

const SvgIOsHome = props => (
  <svg viewBox="0 0 33 32" {...props}>
    <title>{"\n        Icon / iOS / Home\n    "}</title>
    <defs>
      <path
        className="iOS-Home_svg__path-01"
        d="M26.515 14.556v-5.56c0-.632-.528-1.144-1.18-1.144-.65 0-1.179.512-1.179 1.143v3.272l-7.149-6.932a1.206 1.206 0 0 0-1.668 0L3.425 16.888a1.12 1.12 0 0 0 .014 1.604c.455.441 1.191.447 1.654.014l.738-.716v10.066c0 .632.529 1.144 1.18 1.144h18.325c.651 0 1.18-.512 1.18-1.144V17.79l.738.716a1.206 1.206 0 0 0 1.641-.026 1.12 1.12 0 0 0 .026-1.592l-2.406-2.332zM17.26 26.713h-2.172V21.07c0-.581.486-1.053 1.086-1.053.6 0 1.086.472 1.086 1.053v5.643zm6.896 0h-4.537V21.07c0-1.845-1.542-3.34-3.445-3.34-1.903 0-3.445 1.495-3.445 3.34v5.643H8.19V15.508l7.982-7.745 7.983 7.741v11.21h-.001z"
        id="iOS-Home_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="iOS-Home_svg__b">
        <use xlinkHref="#iOS-Home_svg__a" />
      </mask>
      <use xlinkHref="#iOS-Home_svg__a" />
      <g mask="url(#iOS-Home_svg__b)">
        <rect width={33} height={32} />
      </g>
    </g>
  </svg>
);

export default SvgIOsHome;