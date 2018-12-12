import React from "react";

const SvgExternalLink = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        External Link\n    "}</title>
    <defs>
      <path
        className="External-Link_svg__path-01"
        d="M20.314 2h-4.316A.999.999 0 0 1 15 1c0-.556.447-1 .998-1H24V8.002A.999.999 0 0 1 23 9c-.556 0-1-.447-1-.998v-4.86L11.414 13.728 10 12.314 20.314 2zM14 4v2H3c-.555 0-1 .448-1 1v14c0 .555.448 1 1 1h14c.555 0 1-.448 1-1V10h2v12.01c0 1.099-.898 1.99-1.99 1.99H1.99C.892 24 0 23.102 0 22.01V5.99C0 4.892.898 4 1.99 4H14z"
        id="External-Link_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="External-Link_svg__b">
        <use xlinkHref="#External-Link_svg__a" />
      </mask>
      <use xlinkHref="#External-Link_svg__a" />
      <g mask="url(#External-Link_svg__b)">
        <rect width={24} height={24} />
      </g>
    </g>
  </svg>
);

export default SvgExternalLink;
