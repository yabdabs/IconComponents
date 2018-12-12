import React from "react";

const SvgCaretLeft = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Caret Left\n    "}</title>
    <defs>
      <path
        className="Caret-Left_svg__path-01"
        d="M16.75 10.556c0 .15-.054.28-.162.39l-3.828 3.89a.522.522 0 0 1-.385.164.522.522 0 0 1-.385-.165l-3.828-3.889a.538.538 0 0 1-.162-.39c0-.15.054-.281.162-.391A.522.522 0 0 1 8.547 10h7.656c.148 0 .276.055.385.165.108.11.162.24.162.39z"
        id="Caret-Left_svg__a"
      />
    </defs>
    <use
      transform="matrix(0 -1 -1 0 24.875 24.875)"
      xlinkHref="#Caret-Left_svg__a"
      fillRule="evenodd"
    />
  </svg>
);

export default SvgCaretLeft;
