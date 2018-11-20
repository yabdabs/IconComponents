import React from "react";

const SvgIconAccordionCollapseSmall = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <rect
        id="Icon_Accordion_Collapse_-_small_svg__a"
        x={6}
        y={11}
        width={12}
        height={2}
        rx={1}
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <mask id="Icon_Accordion_Collapse_-_small_svg__b" fill="#fff">
        <use xlinkHref="#Icon_Accordion_Collapse_-_small_svg__a" />
      </mask>
      <use fill="#009BDF" xlinkHref="#Icon_Accordion_Collapse_-_small_svg__a" />
      <g mask="url(#Icon_Accordion_Collapse_-_small_svg__b)" fill="#747981">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgIconAccordionCollapseSmall;
