import { ComponentPropsWithoutRef } from "react";

function Pattern({ className }: ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 139 180"
      fill="none"
      className={className}
    >
      <path
        opacity="0.5"
        d="M52 60.5L37 1H123L138 60.5H52ZM52 60.5H1L16 120H67M52 60.5L67 120M67 120H118L133 179.5H82L67 120Z"
        stroke="url(#paint0_linear_768_1278)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_768_1278"
          x1="124.52"
          y1="56.299"
          x2="20.5322"
          y2="56.299"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#E1291D" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export { Pattern };
