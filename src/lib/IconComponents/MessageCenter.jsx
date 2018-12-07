import React from "react";

const SvgMessageCenter = props => (
  <svg viewBox="0 0 24 24" {...props}>
    <title>{"\n        Icon / Message / Message Center\n    "}</title>
    <defs>
      <path
        className="Message-Center_svg__path-01"
        d="M23.99 9.268c0-.017-.007-.033-.01-.048a1.297 1.297 0 0 0-.018-.094c-.007-.03-.011-.036-.017-.054a1.877 1.877 0 0 0-.027-.081c-.01-.027-.016-.037-.024-.056a1.517 1.517 0 0 0-.036-.073c-.013-.024-.021-.035-.032-.052l-.044-.067c-.016-.022-.026-.033-.039-.048a1.103 1.103 0 0 0-.051-.06l-.045-.044a.968.968 0 0 0-.059-.05l-.051-.04-.028-.02-10.925-7.303a1.045 1.045 0 0 0-1.167 0L.491 8.48l-.028.021-.051.04a1.28 1.28 0 0 0-.06.05l-.045.045a.87.87 0 0 0-.051.059l-.039.048-.044.067-.032.052a.76.76 0 0 0-.036.073l-.024.055a.769.769 0 0 0-.027.081c-.008.028-.013.035-.017.054a2.308 2.308 0 0 0-.019.094l-.008.047c-.007.049-.01.097-.01.146v11.134c.001 1.254.985 2.271 2.198 2.272h19.605c1.213-.002 2.196-1.018 2.197-2.272V9.413c0-.049-.004-.097-.01-.145zM12 3.433l8.946 5.98L12 15.392l-8.946-5.98 8.946-5.979zm9.802 17.165H2.197a.054.054 0 0 1-.05-.05v-9.095l9.268 6.194c.356.233.81.233 1.167 0l9.267-6.194v9.094a.054.054 0 0 1-.047.051zM11.35 12.034a.484.484 0 0 1-.01-.65l.845-.935c-.472-.526-1.324-1.327-1.958-1.327a.383.383 0 0 1-.118-.02h-.329v2.596c0 .23-.175.418-.39.418-.216 0-.391-.187-.391-.418V5.781c0-.23.175-.417.39-.417h2.063c.869 0 1.605.683 1.728 1.602.123.92-.406 1.796-1.24 2.056.29.241.563.506.816.79l.801-.887a.412.412 0 0 1 .61-.011.484.484 0 0 1 .01.652l-.835.924.819.908c.11.11.155.277.115.434a.424.424 0 0 1-.304.313.395.395 0 0 1-.401-.139l-.8-.884-.812.9a.419.419 0 0 1-.302.141.417.417 0 0 1-.307-.129zM9.784 6.2v2.063h.328a.383.383 0 0 1 .118-.02c.084 0 .167.007.25.02h.975c.533 0 .965-.462.965-1.032 0-.57-.432-1.031-.965-1.031h-1.67z"
        id="Message-Center_svg__a"
      />
    </defs>
    <g fillRule="evenodd">
      <mask id="Message-Center_svg__b">
        <use xlinkHref="#Message-Center_svg__a" />
      </mask>
      <use xlinkHref="#Message-Center_svg__a" />
      <g mask="url(#Message-Center_svg__b)">
        <rect width={24} height={24} />
      </g>
    </g>
  </svg>
);

export default SvgMessageCenter;
