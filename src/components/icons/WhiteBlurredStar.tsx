import { ComponentPropsWithoutRef } from "react";

function WhiteBlurredStar({ className }: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      viewBox="0 0 123 123"
      fill="none"
    >
      <g filter="url(#filter0_f_798_535)">
        <path
          d="M84.0584 65.5096L109.151 81.0901L99.8968 95.9943L75.1545 80.6313L81.7753 108.941L64.6925 112.936L58.034 84.4651L42.4535 109.558L27.5493 100.304L43.2239 75.0594L14.5072 81.7753L10.5121 64.6925L38.8221 58.0718L14.0197 42.6718L23.2739 27.7672L48.4268 43.3852L41.6732 14.5072L58.756 10.5121L65.4718 39.2284L80.8719 14.4264L95.7764 23.6806L80.4701 48.3317L108.941 41.6732L112.936 58.756L84.0584 65.5096Z"
          fill="#F2F2F2"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_798_535"
          x="0.470181"
          y="0.470166"
          width="122.508"
          height="122.508"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="5.02096"
            result="effect1_foregroundBlur_798_535"
          />
        </filter>
      </defs>
    </svg>
  );
}

export { WhiteBlurredStar };
