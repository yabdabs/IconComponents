import React from "react";

const SvgMessageAttachment = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M22.805 2.351a4.107 4.107 0 0 0-2.891-1.171c-1.093 0-2.12.416-2.892 1.171L6.003 13.13a2.786 2.786 0 0 0 0 3.995 2.9 2.9 0 0 0 2.043.828c.772 0 1.497-.294 2.042-.828l8.05-7.872a.471.471 0 0 0 0-.676.497.497 0 0 0-.691 0l-8.05 7.873c-.721.708-1.98.707-2.704 0a1.845 1.845 0 0 1 0-2.645l11.02-10.777a3.122 3.122 0 0 1 2.2-.892c.832 0 1.614.316 2.202.892a3 3 0 0 1 0 4.304L8.338 20.807c-1.682 1.644-4.418 1.644-6.1 0a4.143 4.143 0 0 1-1.261-2.983c0-1.127.448-2.186 1.262-2.982l10.807-10.57a.47.47 0 0 0 0-.676.496.496 0 0 0-.69 0L1.549 14.166a5.082 5.082 0 0 0-1.55 3.658c0 1.383.55 2.682 1.55 3.658a5.332 5.332 0 0 0 3.74 1.513 5.336 5.336 0 0 0 3.739-1.513L22.805 8.006a3.942 3.942 0 0 0 0-5.655"
        id="Message_-_attachment_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="Message_-_attachment_svg__b" fill="#fff">
        <use xlinkHref="#Message_-_attachment_svg__a" />
      </mask>
      <use fill="#515761" xlinkHref="#Message_-_attachment_svg__a" />
      <g mask="url(#Message_-_attachment_svg__b)" fill="#515761">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgMessageAttachment;
