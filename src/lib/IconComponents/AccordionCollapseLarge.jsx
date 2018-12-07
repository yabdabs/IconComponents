import React from "react";

const SvgAccordionCollapseLarge = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Icon / Accordion / Collapse - large\n    "}</title>
    <defs>
      <rect
        id="Accordion-Collapse-large_svg__a"
        className="Accordion-Collapse-large_svg__path-01"
        x={3}
        y={11}
        width={18}
        height={1.5}
        rx={0.75}
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Accordion-Collapse-large_svg__b">
        <use xlinkHref="#Accordion-Collapse-large_svg__a" />
      </mask>
      <use xlinkHref="#Accordion-Collapse-large_svg__a" />
      <g mask="url(#Accordion-Collapse-large_svg__b)">
        <rect width={24} height={24} />
      </g>
    </g>
  </svg>
);

export default SvgAccordionCollapseLarge;
