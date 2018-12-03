import React from "react";

const SvgAccordionExpandLarge = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M11 11V3.75c0-.414.333-.75.75-.75.414 0 .75.344.75.75V11h7.75c.414 0 .75.333.75.75 0 .414-.344.75-.75.75H12.5v7.75c0 .414-.333.75-.75.75a.755.755 0 0 1-.75-.75V12.5H3.75a.748.748 0 0 1-.75-.75c0-.414.344-.75.75-.75H11z"
        id="Accordion_Expand_-_large_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <mask id="Accordion_Expand_-_large_svg__b">
        <use xlinkHref="#Accordion_Expand_-_large_svg__a" />
      </mask>
      <use xlinkHref="#Accordion_Expand_-_large_svg__a" />
      <g mask="url(#Accordion_Expand_-_large_svg__b)">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgAccordionExpandLarge;
