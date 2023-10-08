import * as React from "react"

const Loading = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 608 341",
    }}
    viewBox="0 0 608 341"
    {...props}
  >
    <circle
      cx={304.2}
      cy={170.7}
      r={88}
      style={{
        fill: "#fff",
        stroke: "#000",
        strokeWidth: 9,
        strokeMiterlimit: 10,
      }}
    />
    <circle
      r={14.8}
      style={{
        stroke: "#000",
        strokeWidth: 0.25,
        strokeMiterlimit: 10,
      }}
    >
      <animateMotion
        fill="remove"
        accumulate="none"
        additive="replace"
        calcMode="paced"
        dur="2s"
        path="M365.3,170.5c0,22-11.6,41.3-29.1,52.1c-9.3,5.8-20.4,9.2-32.3,9.2c-16.8,0-32.2-6.8-43.2-17.8 c-11.2-11.1-18.1-26.4-18.1-43.5c0-17.5,7.3-33.2,19-44.3c11-10.5,25.9-16.9,42.3-16.9c18.2,0,34.4,7.8,45.7,20.4 C359.4,140.4,365.3,154.8,365.3,170.5z"
        repeatCount="indefinite"
        restart="always"
      />
    </circle>
    <path
      d="M365.3 170.5c0 22-11.6 41.3-29.1 52.1-9.3 5.8-20.4 9.2-32.3 9.2-16.8 0-32.2-6.8-43.2-17.8-11.2-11.1-18.1-26.4-18.1-43.5 0-17.5 7.3-33.2 19-44.3 11-10.5 25.9-16.9 42.3-16.9 18.2 0 34.4 7.8 45.7 20.4 9.8 10.7 15.7 25.1 15.7 40.8z"
      style={{
        fill: "none",
      }}
    />
  </svg>
)
export default Loading
