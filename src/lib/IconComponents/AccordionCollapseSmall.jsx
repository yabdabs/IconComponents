import React from "react";

const SvgAccordionCollapseSmall = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Icon / Accordion / Collapse - small\n    "}</title>
    <defs>
      <rect
        id="Accordion-Collapse-Small_svg__a"
        className="Accordion-Collapse-Small_svg__path-01"
        x={6}
        y={11}
        width={12}
        height={2}
        rx={1}
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Accordion-Collapse-Small_svg__b">
        <use xlinkHref="#Accordion-Collapse-Small_svg__a" />
      </mask>
      <use xlinkHref="#Accordion-Collapse-Small_svg__a" />
      <g mask="url(#Accordion-Collapse-Small_svg__b)">
        <rect width={24} height={24} />
      </g>
    </g>
  </svg>
);

export default SvgAccordionCollapseSmall;