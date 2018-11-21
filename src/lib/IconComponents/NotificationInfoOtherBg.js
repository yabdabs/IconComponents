import React from "react";

const SvgNotificationInfoOtherBg = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm0-1.043c6.051 0 10.957-4.906 10.957-10.957C22.957 5.949 18.05 1.043 12 1.043 5.949 1.043 1.043 5.95 1.043 12c0 6.051 4.906 10.957 10.957 10.957zm-1.043-6.002v-6.38c0-.653.489-1.184 1.093-1.184s1.093.53 1.093 1.185v6.379c0 .654-.49 1.184-1.093 1.184-.604 0-1.093-.53-1.093-1.184zm1.103-8.71a1.242 1.242 0 1 1 0-2.485 1.242 1.242 0 0 1 0 2.484z"
        id="Notification_Info_-_other_bg_svg__a"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="Notification_Info_-_other_bg_svg__b" fill="#fff">
        <use xlinkHref="#Notification_Info_-_other_bg_svg__a" />
      </mask>
      <use fill="#009BDF" xlinkHref="#Notification_Info_-_other_bg_svg__a" />
      <g mask="url(#Notification_Info_-_other_bg_svg__b)" fill="#515761">
        <path d="M0 0h24v24H0z" />
      </g>
    </g>
  </svg>
);

export default SvgNotificationInfoOtherBg;
