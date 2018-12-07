import React from "react";

const SvgAccordionExpandSmall = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Icon / Accordion / Expand - small\n    "}</title>
    <defs>
      <path
        className="Accordion-Expand-Small_svg__path-01"
        d="M12.947 11.053h4.111a.948.948 0 0 1 0 1.895h-4.11v4.11a.948.948 0 0 1-1.895 0v-4.11H6.942a.948.948 0 0 1 0-1.895h4.11V6.942a.948.948 0 0 1 1.895 0v4.11z"
        id="Accordion-Expand-Small_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Accordion-Expand-Small_svg__b">
        <use xlinkHref="#Accordion-Expand-Small_svg__a" />
      </mask>
      <use xlinkHref="#Accordion-Expand-Small_svg__a" />
      <g mask="url(#Accordion-Expand-Small_svg__b)">
        <rect width={24} height={24} />
      </g>
    </g>
  </svg>
);

export default SvgAccordionExpandSmall;
