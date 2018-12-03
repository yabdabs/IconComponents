import React from "react";

const SvgAccordionCollapseLarge = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <rect
        id="Accordion_Collapse_-_large_svg__a"
        x={3}
        y={11}
        width={18}
        height={1.5}
        rx={0.75}
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Accordion_Collapse_-_large_svg__b">
        <use xlinkHref="#Accordion_Collapse_-_large_svg__a" />
      </mask>
      <use xlinkHref="#Accordion_Collapse_-_large_svg__a" />
      <g mask="url(#Accordion_Collapse_-_large_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgAccordionCollapseLarge;
