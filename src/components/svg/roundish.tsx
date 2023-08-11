import React from "react";

type RoundishProps = React.HTMLAttributes<HTMLOrSVGElement>;

export default function Roundish({ className }: RoundishProps) {
  return (
    <svg
      id="sw-js-blob-svg"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {" "}
      <defs>
        {" "}
        <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
          {" "}
          <stop
            id="stop1"
            stop-color="rgba(248, 117, 55, 1)"
            offset="0%"
          ></stop>{" "}
          <stop
            id="stop2"
            stop-color="rgba(251, 168, 31, 1)"
            offset="100%"
          ></stop>{" "}
        </linearGradient>{" "}
      </defs>{" "}
      <path
        fill="url(#sw-gradient)"
        d="M15.2,-15.7C21.4,-12.9,29.2,-9.7,31.3,-4.5C33.4,0.7,29.8,7.9,25.9,15.1C21.9,22.2,17.6,29.3,10.9,33.1C4.2,36.9,-4.8,37.5,-12.8,34.8C-20.7,32,-27.6,26,-32.6,18.3C-37.6,10.7,-40.7,1.5,-39.9,-7.7C-39.1,-17,-34.4,-26.2,-27.1,-28.8C-19.8,-31.4,-9.9,-27.3,-2.7,-24.1C4.5,-20.9,9,-18.5,15.2,-15.7Z"
        width="100%"
        height="100%"
        transform="translate(50 50)"
        stroke-width="0"
        style={{ transition: "all 0.3s ease 0s" }}
      ></path>{" "}
    </svg>
  );
}
