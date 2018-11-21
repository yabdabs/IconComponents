import React from "react";

const SvgCaretRight = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M16.75 10.556c0 .15-.054.28-.162.39l-3.828 3.89a.522.522 0 0 1-.385.164.522.522 0 0 1-.385-.165l-3.828-3.889a.538.538 0 0 1-.162-.39c0-.15.054-.281.162-.391A.522.522 0 0 1 8.547 10h7.656c.148 0 .276.055.385.165.108.11.162.24.162.39z"
        id="Caret_-_right_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="Caret_-_right_svg__b" fill="#fff">
        <use xlinkHref="#Caret_-_right_svg__a" />
      </mask>
      <use
        fill="#747981"
        transform="rotate(-90 12.375 12.5)"
        xlinkHref="#Caret_-_right_svg__a"
      />
      <g mask="url(#Caret_-_right_svg__b)" fill="#747981">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgCaretRight;