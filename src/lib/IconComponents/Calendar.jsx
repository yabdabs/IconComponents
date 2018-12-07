import React from "react";

const SvgCalendar = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Icon / Calendar\n    "}</title>
    <defs>
      <path
        className="Calendar_svg__path-01"
        d="M18 2h3.997A1 1 0 0 1 23 3c0 .552-.439 1-1.003 1H1.003A1 1 0 0 1 0 3c0-.552.439-1 1.003-1H5v-.99a1 1 0 1 1 2 0V2h9v-.99a1 1 0 1 1 2 0V2zM0 5.993A.992.992 0 0 1 1.003 5h20.994A.998.998 0 0 1 23 5.993v16.014a.992.992 0 0 1-1.003.993H1.003A.998.998 0 0 1 0 22.007V5.993zM2 7v4h4V7H2zm5 0v4h4V7H7zm5 0v4h4V7h-4zm5 0v4h4V7h-4zM2 12v4h4v-4H2zm5 0v4h4v-4H7zm5 0v4h4v-4h-4zm5 0v4h4v-4h-4zM2 17v4h4v-4H2zm5 0v4h4v-4H7zm5 0v4h4v-4h-4zm5 0v4h4v-4h-4z"
        id="Calendar_svg__a"
      />
    </defs>
    <g transform="translate(1 1)" fillRule="evenodd">
      <mask id="Calendar_svg__b">
        <use xlinkHref="#Calendar_svg__a" />
      </mask>
      <use xlinkHref="#Calendar_svg__a" />
      <g mask="url(#Calendar_svg__b)">
        <rect width={24} height={24} transform="translate(-1 -1)" />
      </g>
    </g>
  </svg>
);

export default SvgCalendar;
