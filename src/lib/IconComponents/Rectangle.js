import React from "react";

const SvgRectangle = props => (
  <svg width={24} height={24} {...props}>
    <path d="M0 0h24v24H0z" fillRule="evenodd" />
  </svg>
);

export default SvgRectangle;
