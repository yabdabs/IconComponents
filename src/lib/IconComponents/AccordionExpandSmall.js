import React from "react";

const SvgAccordionExpandSmall = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M12.947 11.053h4.111a.948.948 0 0 1 0 1.895h-4.11v4.11a.948.948 0 0 1-1.895 0v-4.11H6.942a.948.948 0 0 1 0-1.895h4.11V6.942a.948.948 0 0 1 1.895 0v4.11z"
        id="Accordion_Expand_-_small_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <mask id="Accordion_Expand_-_small_svg__b" fill="#fff">
        <use xlinkHref="#Accordion_Expand_-_small_svg__a" />
      </mask>
      <use fill="#009BDF" xlinkHref="#Accordion_Expand_-_small_svg__a" />
      <g mask="url(#Accordion_Expand_-_small_svg__b)" fill="#747981">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgAccordionExpandSmall;
