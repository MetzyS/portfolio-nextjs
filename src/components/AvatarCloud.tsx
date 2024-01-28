"use client";

export const AvatarCloud = (props: {
  width: number;
  height: number;
  className?: string;
  fill?: string;
  text?: string;
  textClass?: string;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 755.99 504.89"
      width={props.width}
      height={props.height}
      className={props.className}
    >
      <path
        d="M60.99 316.68c-34.16-44.86-40.03-81.4-17.61-109.62s56.04-32.76 100.86-13.62c-24.13-52.72-22.17-85.68 5.89-98.9 28.05-13.22 71.65-16.49 130.79-9.82 42.4-53.33 87.91-78.11 136.52-74.35 72.91 5.65 124.09 19.05 145.81 114.25 7.81 18.79 106.19-10.27 142.3 47.24s28.93 133.03 0 138.92 70.14-4.99 31.27 55.11c-13.61 21.04-73.86 75.18-115.55 87.25-77.41 22.42-153.82-9.32-192.87-26.8-15.32-19.37-79.2 73.49-164.52 68.34-56.88-3.44-89.11-32.67-96.67-87.71-24.48 22.49-56.09 28.95-94.82 19.37-58.1-14.36-81.04-64.51-45.4-94.01"
        fill="white"
        stroke="#000"
        strokeMiterlimit="10"
        strokeWidth="20"
      />
      <text
        // fill="#231f20"
        // font-family="Sans-serif"
        // font-size="120"
        className={props.textClass}
        // font-weight="bold"
      >
        <tspan x="217.1" y="302.32">
          {props.text}
        </tspan>
      </text>
    </svg>
  );
};
