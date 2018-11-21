import React from "react";

const SvgMessageReply = props => (
  <svg width={24} height={24} {...props}>
    <defs>
      <path
        d="M23.99 7.957c0-.016-.007-.03-.01-.045a1.207 1.207 0 0 0-.018-.09c-.007-.03-.011-.036-.017-.053a1.76 1.76 0 0 0-.027-.078c-.01-.025-.016-.035-.024-.053a1.437 1.437 0 0 0-.036-.07c-.013-.024-.021-.035-.032-.05-.01-.017-.028-.044-.044-.065-.016-.021-.026-.032-.039-.047a1.075 1.075 0 0 0-.051-.057l-.045-.042a.958.958 0 0 0-.059-.05l-.051-.037-.028-.02L12.584.17a1.08 1.08 0 0 0-1.167 0L.491 7.2l-.028.02-.051.037c-.02.016-.04.032-.06.05l-.045.042a.848.848 0 0 0-.051.057l-.039.047-.044.064-.032.05a.72.72 0 0 0-.036.07l-.024.053a.72.72 0 0 0-.027.078c-.008.027-.013.035-.017.053-.005.018-.013.06-.019.09l-.008.045c-.007.047-.01.094-.01.14v10.717A2.195 2.195 0 0 0 2.198 21h19.605A2.195 2.195 0 0 0 24 18.813V8.097a1.07 1.07 0 0 0-.01-.14zM12 2.342l8.946 5.755L12 13.852 3.053 8.096l8.946-5.754zm9.802 16.521H2.197a.053.053 0 0 1-.05-.049v-8.753l9.268 5.962c.356.224.81.224 1.167 0l9.267-5.962v8.753a.052.052 0 0 1-.047.05z"
        id="Message_-_reply_svg__a"
      />
      <path
        d="M8.593 4H16v4H8.593v4L0 6l8.593-6v4z"
        id="Message_-_reply_svg__c"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <g transform="translate(0 1)">
        <mask id="Message_-_reply_svg__b" fill="#fff">
          <use xlinkHref="#Message_-_reply_svg__a" />
        </mask>
        <use fill="#B9BCC0" xlinkHref="#Message_-_reply_svg__a" />
        <g mask="url(#Message_-_reply_svg__b)" fill="#747981">
          <path d="M0-1h24v24H0z" />
        </g>
      </g>
      <g transform="translate(6 10)">
        <mask id="Message_-_reply_svg__d" fill="#fff">
          <use xlinkHref="#Message_-_reply_svg__c" />
        </mask>
        <use fill="#009BDF" xlinkHref="#Message_-_reply_svg__c" />
        <g mask="url(#Message_-_reply_svg__d)" fill="#009BDF">
          <path d="M-6-10h24v24H-6z" />
        </g>
      </g>
    </g>
  </svg>
);

export default SvgMessageReply;
