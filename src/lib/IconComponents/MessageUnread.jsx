import React from "react";

const SvgMessageUnread = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Message Unread\n    "}</title>
    <defs>
      <path
        className="Message-Unread_svg__path-01"
        d="M.035 6.642C.222 5.709 1.12 5 2.198 5h19.604c1.075.001 1.969.703 2.16 1.63a1.1 1.1 0 0 1 .038.28v10.872A2.21 2.21 0 0 1 21.803 20H2.198A2.21 2.21 0 0 1 0 17.782V6.91a1.13 1.13 0 0 1 .035-.268zm20.911.269L12 12.748 3.053 6.91h17.893zm.856 10.922H2.197a.053.053 0 0 1-.05-.05v-8.88l9.268 6.048c.356.227.81.227 1.167 0l9.267-6.048v8.88a.053.053 0 0 1-.047.05z"
        id="Message-Unread_svg__a"
      />
    </defs>
    <use xlinkHref="#Message-Unread_svg__a" fillRule="evenodd" />
  </svg>
);

export default SvgMessageUnread;
