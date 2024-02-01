"use client";
import { useAvatarColors } from "@/app/stores/useAvatarColors";
import { useHoveredPart } from "@/app/stores/useAvatarColors";

export const AvatarBust = (props: {
  fill?: string;
  shirtColor?: string;
  sleeveColor?: string;
  skinColor?: string;
  hairBandColor?: string;
  strokeColor?: string;
  laptopColor?: string;
  className?: string;
  eyebrowsColor?: string;
  eyesColor?: string;
  mouthColor?: string;
}) => {
  const { shirt, skin, sleeve, hairBand, laptop } = useAvatarColors();
  const { toggleIsHovered, resetAllHovered } = useHoveredPart();

  return (
    <svg
      viewBox="0 0 329 400"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <defs>
        <linearGradient
          id="color-0"
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(0.1, 0, 0, -0.1, 0, 400)"
        >
          <stop
            style={{
              stopColor: "rgba(0, 0, 0, 0)",
            }}
          />
        </linearGradient>
      </defs>
      <g transform="matrix(1, 0, 0, 1, 0, -9.999999999999986)">
        <title>{"t-shirt"}</title>
        <path
          d="M 127.249 179.679 L 120.165 179.904 L 116.905 181.815 L 110.271 192.497 L 109.934 196.095 L 64.71 215.486 C 64.71 215.486 42.362 224.374 24.619 310.412 L 26.464 313.113 L 73.505 324.431 L 175.26 294.133 C 175.26 294.133 186.455 301.672 186.455 301.786 C 186.455 301.9 188.625 308.526 188.625 308.526 L 206.799 250.212 L 225.556 245.41 L 209.35 215.399 L 183.691 203.995 C 183.691 203.995 183.391 200.694 183.391 200.544 C 183.391 200.394 177.238 195.592 177.238 195.592 L 171.987 196.492 L 175.438 204.445 L 160.282 224.852 L 158.482 232.055 L 151.579 223.952 L 152.63 209.697 L 125.17 187.639 L 127.249 179.679 Z"
          fill="none"
          // className={props.shirtColor}
          className={shirt}
          onClick={() => {
            resetAllHovered("shirtIsHovered");
            toggleIsHovered("shirtIsHovered");
          }}
        >
          <title>{"t-shirt"}</title>
        </path>
        <path
          d="M 63.255 375.175 L 63.556 367.336 L 142.547 327.539 L 146.768 326.634 L 178.727 337.79 L 230.885 332.664 L 226.664 360.703 L 217.318 369.447 L 204.354 373.366 L 207.369 396.28 C 207.369 396.28 73.807 393.868 64.461 396.882 C 64.461 396.882 62.049 384.823 63.255 375.175 Z"
          fill="none"
          // className={props.shirtColor}
          className={shirt}
          onClick={() => {
            resetAllHovered("shirtIsHovered");
            toggleIsHovered("shirtIsHovered");
          }}
        >
          <title>{"t-shirt"}</title>
        </path>
      </g>
      <g transform="matrix(1, 0, 0, 1, 0, -9.999999999999986)">
        <title>{"manche"}</title>
        <path
          d="M 203.276 337.273 L 205.356 370.828 C 205.356 370.828 222.411 368.886 226.016 364.033 C 229.621 359.18 230.591 333.529 230.591 333.529 L 203.276 337.273 Z"
          fill="none"
          // className={props.sleeveColor}
          className={sleeve}
          onClick={() => {
            resetAllHovered("sleeveIsHovered");
            toggleIsHovered("sleeveIsHovered");
          }}
        >
          <title>{"manche"}</title>
        </path>
        <path
          d="M 28.314 314.25 L 29.178 348.832 C 29.178 348.832 35.88 366.125 44.959 369.476 C 54.038 372.827 71.116 364.612 71.116 364.612 L 130.564 334.024 C 130.564 334.024 124.403 309.272 124.295 309.272 C 124.187 309.272 68.198 324.728 68.198 324.728 C 68.198 324.728 46.04 313.812 28.314 314.25 Z"
          fill="none"
          // className={props.sleeveColor}
          className={sleeve}
          onClick={() => {
            resetAllHovered("sleeveIsHovered");
            toggleIsHovered("sleeveIsHovered");
          }}
        >
          <title>{"manche"}</title>
        </path>
      </g>
      <g transform="matrix(1, 0, 0, 1, 0, -9.999999999999986)">
        <title>{"pc"}</title>
        <path
          d="M 206.98 249.836 C 206.98 249.836 266.857 236.631 307.155 237.997 L 292.128 323.828 C 292.128 323.828 249.554 334.301 186.946 337.716 L 176.473 337.488 L 144.827 326.105 C 144.827 326.105 186.035 320.413 186.263 320.413 C 186.491 320.413 206.98 249.836 206.98 249.836 Z"
          fill="none"
          // className={props.laptopColor}
          className={laptop}
          onClick={() => {
            resetAllHovered("laptopIsHovered");
            toggleIsHovered("laptopIsHovered");
          }}
        >
          <title>{"pc"}</title>
        </path>
      </g>
      <g transform="matrix(1, 0, 0, 1, 0, -9.999999999999986)">
        <title>{"peau"}</title>
        <path
          d="M 173.487 82.314 C 160.117 82.314 146.747 82.307 134.243 85.433 C 122.104 88.468 110.266 97.974 103.575 104.665 C 100.963 107.278 99.628 111.472 97.338 113.762 C 95.542 115.558 96.869 120.208 95.259 121.818 C 94.037 123.04 94.661 126.574 93.439 127.796 C 93.136 128.099 93.743 129.312 93.439 129.615 C 92.688 130.366 93.404 135.038 93.959 135.593 C 95.091 136.724 94.718 139.47 95.778 140.531 C 98.269 143.021 98.676 148.626 101.236 151.187 C 110.968 160.918 127.005 167.58 140.48 174.317 C 143.827 175.991 147.286 178.524 149.577 180.815 C 150.603 181.841 153.139 182.298 154.255 183.414 C 156.683 185.842 161.411 184.393 164.651 186.013 C 166.742 187.058 170.773 186.013 172.707 186.013 C 173.421 186.013 175.418 186.161 175.826 185.753 C 177.815 183.763 180.937 182.461 182.843 180.555 C 186.039 177.359 187.608 173.191 190.64 170.159 C 192.206 168.594 191.295 164.826 192.979 163.142 C 194.157 161.964 193.413 159.069 194.539 157.944 C 195.405 157.078 194.452 154.392 195.318 153.526 C 196.019 152.825 195.578 149.589 195.578 148.328 C 195.578 143.135 195.058 138.746 195.058 133.774 C 195.058 131.146 194.799 128.22 194.799 125.977 C 194.799 125.005 195.055 123.114 194.539 122.598 C 194.07 122.13 194.629 119.661 194.279 118.96 C 193.755 117.912 194.279 115.219 194.279 114.022 C 194.279 109.641 195.516 103.502 193.759 99.987 C 192.491 97.452 192.692 93.722 190.9 91.93 C 190.388 91.419 190.828 89.779 190.38 89.331 C 190.03 88.982 187.781 86.222 187.781 85.953"
          fill="none"
          // className={props.skinColor}
          className={skin}
          onClick={() => {
            resetAllHovered("skinIsHovered");
            toggleIsHovered("skinIsHovered");
          }}
        >
          <title>{"tête"}</title>
        </path>
        <path
          d="M 126.399 309.491 C 126.399 309.491 125.656 330.106 131.784 332.334 L 161.871 321.191 L 177.471 325.463 C 177.471 325.463 181.186 322.491 179.143 320.448 L 181 319.334 C 181 319.334 189.914 321.562 186.2 315.062 L 188.614 308.934 L 184.714 300.762 C 184.714 300.762 176.357 294.633 175.985 294.633 C 175.613 294.633 126.399 309.491 126.399 309.491 Z"
          fill="none"
          // className={props.skinColor}
          className={skin}
          onClick={() => {
            resetAllHovered("skinIsHovered");
            toggleIsHovered("skinIsHovered");
          }}
        >
          <title>{"main"}</title>
        </path>
        <path
          d="M 138.342 178.059 C 131.643 178.059 131.294 181.193 128.166 184.321 C 127.359 185.128 126.341 188.237 127.644 189.539 C 134.515 196.41 143.246 200.966 150.084 207.804 C 152.201 209.921 152.171 215.253 152.171 219.546 C 152.171 220.466 151.431 224.546 151.911 225.026 C 153.797 226.912 156.468 227.756 158.173 229.462 C 158.413 229.702 159.608 228.026 159.738 227.896 C 161.289 226.346 161.867 223.419 163.391 221.895 C 167.83 217.456 170.412 210.699 174.872 206.239 C 176.25 204.862 174.478 199.582 173.829 198.933 C 173.545 198.65 173.715 196.324 173.307 196.324"
          fill="none"
          // className={props.skinColor}
          className={skin}
          onClick={() => {
            resetAllHovered("skinIsHovered");
            toggleIsHovered("skinIsHovered");
          }}
        >
          <title>{"cou"}</title>
        </path>
      </g>
      <g transform="matrix(1, 0, 0, 1, 0, -9.999999999999986)">
        <title>{"elastique"}</title>
        <path
          d="M 122.191 58.207 C 119.741 58.207 121.928 58.47 121.403 57.945 C 121.334 57.875 120.724 57.945 120.616 57.945 C 120.004 57.945 119.391 57.945 118.779 57.945 C 118.463 57.945 117.742 57.807 117.466 57.945 C 117.355 58 117.314 58.152 117.204 58.207 C 117.047 58.285 116.854 58.207 116.679 58.207 C 116.416 58.207 116.154 58.207 115.891 58.207 C 115.804 58.207 115.691 58.145 115.629 58.207 C 115.567 58.269 115.691 58.408 115.629 58.47 C 115.567 58.531 115.454 58.47 115.366 58.47 C 115.117 58.47 114.534 58.361 114.316 58.47 C 114.206 58.525 114.165 58.677 114.054 58.732 C 113.844 58.837 113.476 58.627 113.266 58.732 C 113.156 58.787 113.115 58.939 113.004 58.995 C 112.849 59.072 112.393 58.995 112.216 58.995 C 112.129 58.995 112.016 58.933 111.954 58.995 C 111.892 59.056 112.016 59.195 111.954 59.257 C 111.833 59.378 111.325 59.178 111.167 59.257 C 111.056 59.312 111.015 59.464 110.904 59.52 C 110.624 59.66 110.134 59.38 109.854 59.52 C 109.743 59.575 109.702 59.727 109.592 59.782 C 109.437 59.859 108.981 59.782 108.804 59.782 C 108.717 59.782 108.604 59.72 108.542 59.782 C 108.48 59.844 108.604 59.983 108.542 60.045 C 108.367 60.22 107.667 59.87 107.492 60.045 C 107.43 60.106 107.554 60.245 107.492 60.307 C 107.317 60.482 106.617 60.132 106.442 60.307 C 106.38 60.369 106.504 60.508 106.442 60.57 C 106.32 60.691 105.813 60.49 105.654 60.57 C 105.544 60.625 105.502 60.777 105.392 60.832 C 105.252 60.902 105.007 60.762 104.867 60.832 C 104.756 60.887 104.715 61.039 104.604 61.094 C 104.448 61.173 104.203 60.971 104.079 61.094 C 104.018 61.156 104.141 61.295 104.079 61.357 C 104.079 61.357 103.554 61.357 103.554 61.357 C 103.444 61.412 103.403 61.564 103.292 61.619 C 103.135 61.698 102.891 61.496 102.767 61.619 C 102.705 61.681 102.829 61.82 102.767 61.882 C 102.679 61.969 102.329 61.794 102.242 61.882 C 102.18 61.944 102.304 62.083 102.242 62.144 C 102.155 62.232 101.805 62.057 101.717 62.144 C 101.655 62.206 101.779 62.345 101.717 62.407 C 101.63 62.494 101.28 62.319 101.192 62.407 C 101.13 62.469 101.254 62.608 101.192 62.669 C 101.13 62.731 100.991 62.608 100.93 62.669 C 100.868 62.731 100.991 62.87 100.93 62.932 C 100.842 63.019 100.492 62.844 100.405 62.932 C 100.343 62.994 100.466 63.132 100.405 63.194 C 100.343 63.256 100.204 63.132 100.142 63.194 C 100.08 63.256 100.204 63.395 100.142 63.457 C 100.08 63.519 99.958 63.418 99.88 63.457 C 99.53 63.632 99.705 63.807 99.355 63.982 C 99.276 64.021 99.154 63.92 99.092 63.982 C 99.03 64.044 99.154 64.182 99.092 64.244 C 99.03 64.306 98.892 64.182 98.83 64.244 C 98.768 64.306 98.892 64.445 98.83 64.507 C 98.768 64.569 98.629 64.445 98.567 64.507 C 98.505 64.569 98.629 64.707 98.567 64.769 C 98.505 64.831 98.367 64.707 98.305 64.769 C 98.243 64.831 98.367 64.97 98.305 65.032 C 98.243 65.094 98.104 64.97 98.042 65.032 C 97.98 65.094 98.104 65.232 98.042 65.294 C 97.98 65.356 97.842 65.232 97.78 65.294 C 97.718 65.356 97.842 65.495 97.78 65.557 C 97.718 65.619 97.579 65.495 97.517 65.557 C 97.455 65.619 97.579 65.757 97.517 65.819 C 97.455 65.881 97.317 65.757 97.255 65.819 C 97.193 65.881 97.317 66.02 97.255 66.082 C 97.193 66.144 97.054 66.02 96.992 66.082 C 96.93 66.144 97.054 66.282 96.992 66.344 C 96.93 66.406 96.792 66.282 96.73 66.344 C 96.668 66.406 96.792 66.545 96.73 66.607 C 96.668 66.669 96.529 66.545 96.467 66.607 C 96.405 66.669 96.506 66.791 96.467 66.869 C 96.412 66.98 96.26 67.021 96.205 67.132 C 96.166 67.21 96.267 67.332 96.205 67.394 C 96.143 67.456 96.004 67.332 95.942 67.394 C 95.88 67.456 96.004 67.595 95.942 67.657 C 95.88 67.718 95.742 67.595 95.68 67.657 C 95.592 67.744 95.767 68.094 95.68 68.182 C 95.618 68.243 95.479 68.12 95.417 68.182 C 95.33 68.269 95.505 68.619 95.417 68.707 C 95.356 68.768 95.217 68.645 95.155 68.707 C 95.067 68.794 95.242 69.144 95.155 69.232 C 95.093 69.293 94.954 69.17 94.892 69.232 C 94.805 69.319 94.98 69.669 94.892 69.756 C 94.831 69.818 94.692 69.695 94.63 69.756 C 94.506 69.88 94.754 70.158 94.63 70.281 C 94.568 70.343 94.429 70.22 94.367 70.281 C 94.28 70.369 94.455 70.719 94.367 70.806 C 94.306 70.868 94.167 70.745 94.105 70.806 C 94.017 70.894 94.192 71.244 94.105 71.331 C 94.043 71.393 93.904 71.27 93.842 71.331 C 93.719 71.455 93.921 71.7 93.842 71.856 C 93.787 71.967 93.635 72.008 93.58 72.119 C 93.502 72.275 93.704 72.52 93.58 72.644 C 93.518 72.706 93.379 72.582 93.317 72.644 C 93.186 72.775 93.449 73.3 93.317 73.431 C 93.256 73.493 93.117 73.369 93.055 73.431 C 92.88 73.606 93.23 74.306 93.055 74.481 C 92.993 74.543 92.854 74.419 92.793 74.481 C 92.618 74.656 92.968 75.356 92.793 75.531 C 92.731 75.593 92.592 75.469 92.53 75.531 C 92.355 75.706 92.705 76.406 92.53 76.581 C 92.468 76.643 92.329 76.519 92.268 76.581 C 92.093 76.756 92.443 77.456 92.268 77.631 C 92.206 77.693 92.067 77.569 92.005 77.631 C 91.943 77.693 92.005 77.806 92.005 77.894 C 92.005 78.156 92.005 78.418 92.005 78.681 C 92.005 78.768 92.067 78.882 92.005 78.943 C 91.943 79.005 91.804 78.882 91.743 78.943 C 91.681 79.005 91.743 79.118 91.743 79.206 C 91.743 79.556 91.743 79.906 91.743 80.256 C 91.743 80.343 91.804 80.457 91.743 80.518 C 91.681 80.58 91.542 80.457 91.48 80.518 C 91.349 80.65 91.611 81.175 91.48 81.306 C 91.418 81.368 91.279 81.244 91.218 81.306 C 91.086 81.437 91.349 81.962 91.218 82.093 C 91.156 82.155 91.017 82.031 90.955 82.093 C 90.868 82.181 91.043 82.531 90.955 82.618 C 90.893 82.68 90.755 82.556 90.693 82.618 C 90.693 82.618 90.693 83.143 90.693 83.143 C 90.637 83.254 90.485 83.295 90.43 83.406 C 90.351 83.564 90.551 84.072 90.43 84.193 C 90.368 84.255 90.23 84.131 90.168 84.193 C 89.993 84.368 90.343 85.068 90.168 85.243 C 90.106 85.305 89.967 85.181 89.905 85.243 C 89.774 85.374 90.036 85.899 89.905 86.031 C 89.843 86.092 89.705 85.969 89.643 86.031 C 89.521 86.152 89.722 86.66 89.643 86.818 C 89.587 86.929 89.436 86.97 89.38 87.081 C 89.303 87.235 89.38 87.692 89.38 87.868 C 89.38 88.48 89.38 89.093 89.38 89.705 C 89.38 89.813 89.311 90.423 89.38 90.493 C 89.442 90.555 89.581 90.431 89.643 90.493 C 89.705 90.555 89.581 90.693 89.643 90.755 C 89.705 90.817 89.843 90.693 89.905 90.755 C 89.967 90.817 89.843 90.956 89.905 91.018 C 89.967 91.08 90.106 90.956 90.168 91.018 C 90.23 91.08 90.129 91.202 90.168 91.28 C 90.168 91.28 90.693 91.805 90.693 91.805 C 90.771 91.844 90.893 91.743 90.955 91.805 C 91.017 91.867 90.893 92.006 90.955 92.068 C 91.017 92.13 91.156 92.006 91.218 92.068 C 91.279 92.13 91.156 92.268 91.218 92.33 C 91.279 92.392 91.418 92.268 91.48 92.33 C 91.542 92.392 91.418 92.531 91.48 92.593 C 91.542 92.655 91.681 92.531 91.743 92.593 C 91.804 92.655 91.681 92.793 91.743 92.855 C 91.83 92.943 92.18 92.768 92.268 92.855 C 92.329 92.917 92.206 93.056 92.268 93.118 C 92.391 93.241 92.669 92.994 92.793 93.118 C 92.854 93.18 92.731 93.318 92.793 93.38 C 92.924 93.511 93.449 93.249 93.58 93.38 C 93.642 93.442 93.518 93.581 93.58 93.643 C 93.755 93.818 94.455 93.468 94.63 93.643 C 94.692 93.705 94.568 93.843 94.63 93.905 C 94.692 93.967 94.805 93.905 94.892 93.905 C 95.155 93.905 95.417 93.905 95.68 93.905 C 95.767 93.905 95.88 93.843 95.942 93.905 C 96.292 94.255 95.505 94.168 96.205 94.168 C 97.167 94.168 98.13 94.168 99.092 94.168 C 99.341 94.168 99.924 94.277 100.142 94.168 C 100.253 94.112 100.294 93.96 100.405 93.905 C 100.545 93.835 100.79 93.975 100.93 93.905 C 101.04 93.85 101.081 93.698 101.192 93.643 C 101.27 93.604 101.376 93.682 101.455 93.643 C 101.565 93.587 101.606 93.436 101.717 93.38 C 101.795 93.341 101.901 93.419 101.98 93.38 C 102.09 93.325 102.131 93.173 102.242 93.118 C 102.32 93.079 102.426 93.157 102.504 93.118 C 102.615 93.062 102.656 92.911 102.767 92.855 C 102.845 92.816 102.968 92.917 103.029 92.855 C 103.091 92.793 102.968 92.655 103.029 92.593 C 103.153 92.469 103.431 92.716 103.554 92.593 C 103.616 92.531 103.493 92.392 103.554 92.33 C 103.616 92.268 103.739 92.369 103.817 92.33 C 103.928 92.275 103.969 92.123 104.079 92.068 C 104.158 92.029 104.28 92.13 104.342 92.068 C 104.404 92.006 104.28 91.867 104.342 91.805 C 104.404 91.743 104.526 91.844 104.604 91.805 C 104.715 91.75 104.756 91.598 104.867 91.543 C 104.945 91.504 105.067 91.605 105.129 91.543 C 105.191 91.481 105.067 91.342 105.129 91.28 C 105.191 91.218 105.33 91.342 105.392 91.28 C 105.454 91.218 105.33 91.08 105.392 91.018 C 105.454 90.956 105.592 91.08 105.654 91.018 C 105.716 90.956 105.592 90.817 105.654 90.755 C 105.716 90.693 105.855 90.817 105.917 90.755 C 105.979 90.693 105.855 90.555 105.917 90.493 C 105.979 90.431 106.101 90.532 106.179 90.493 C 106.436 90.364 106.448 90.096 106.704 89.968 C 106.783 89.929 106.905 90.03 106.967 89.968 C 107.029 89.906 106.928 89.784 106.967 89.705 C 107.054 89.53 107.579 89.005 107.754 88.918 C 107.832 88.879 107.955 88.98 108.017 88.918 C 108.079 88.856 107.978 88.734 108.017 88.655 C 108.127 88.434 108.367 88.305 108.542 88.13 C 108.911 87.761 109.623 87.281 109.854 86.818 C 109.893 86.74 109.792 86.617 109.854 86.556 C 109.916 86.494 110.055 86.617 110.117 86.556 C 110.178 86.494 110.055 86.355 110.117 86.293 C 110.178 86.231 110.317 86.355 110.379 86.293 C 110.441 86.231 110.317 86.092 110.379 86.031 C 110.441 85.969 110.58 86.092 110.642 86.031 C 110.703 85.969 110.58 85.83 110.642 85.768 C 110.703 85.706 110.842 85.83 110.904 85.768 C 110.966 85.706 110.865 85.584 110.904 85.506 C 110.986 85.342 111.347 85.144 111.429 84.981 C 111.468 84.902 111.367 84.78 111.429 84.718 C 111.491 84.656 111.63 84.78 111.691 84.718 C 111.753 84.656 111.63 84.518 111.691 84.456 C 111.753 84.394 111.892 84.518 111.954 84.456 C 112.016 84.394 111.915 84.271 111.954 84.193 C 112.009 84.083 112.161 84.041 112.216 83.931 C 112.256 83.852 112.155 83.73 112.216 83.668 C 112.278 83.606 112.417 83.73 112.479 83.668 C 112.541 83.606 112.44 83.484 112.479 83.406 C 112.654 83.056 112.829 83.231 113.004 82.881 C 113.043 82.802 112.942 82.68 113.004 82.618 C 113.066 82.556 113.205 82.68 113.266 82.618 C 113.328 82.556 113.227 82.434 113.266 82.356 C 113.301 82.286 113.756 81.901 113.791 81.831 C 113.83 81.753 113.729 81.63 113.791 81.568 C 113.853 81.506 113.992 81.63 114.054 81.568 C 114.116 81.506 113.992 81.368 114.054 81.306 C 114.116 81.244 114.254 81.368 114.316 81.306 C 114.378 81.244 114.277 81.122 114.316 81.043 C 114.372 80.933 114.523 80.892 114.579 80.781 C 114.618 80.703 114.517 80.58 114.579 80.518 C 114.641 80.457 114.779 80.58 114.841 80.518 C 114.903 80.457 114.779 80.318 114.841 80.256 C 114.903 80.194 115.042 80.318 115.104 80.256 C 115.166 80.194 115.065 80.072 115.104 79.993 C 115.159 79.883 115.311 79.842 115.366 79.731 C 115.405 79.653 115.304 79.53 115.366 79.468 C 115.428 79.407 115.567 79.53 115.629 79.468 C 115.691 79.407 115.567 79.268 115.629 79.206 C 115.691 79.144 115.829 79.268 115.891 79.206 C 115.953 79.144 115.852 79.022 115.891 78.943 C 115.947 78.833 116.098 78.792 116.154 78.681 C 116.193 78.603 116.092 78.48 116.154 78.419 C 116.216 78.357 116.354 78.48 116.416 78.419 C 116.478 78.357 116.377 78.234 116.416 78.156 C 116.591 77.806 116.766 77.981 116.941 77.631 C 116.98 77.553 116.879 77.43 116.941 77.369 C 117.003 77.307 117.142 77.43 117.204 77.369 C 117.266 77.307 117.142 77.168 117.204 77.106 C 117.266 77.044 117.404 77.168 117.466 77.106 C 117.528 77.044 117.427 76.922 117.466 76.844 C 117.641 76.494 117.816 76.669 117.991 76.319 C 118.03 76.24 117.929 76.118 117.991 76.056 C 118.053 75.994 118.192 76.118 118.254 76.056 C 118.315 75.994 118.192 75.856 118.254 75.794 C 118.315 75.732 118.454 75.856 118.516 75.794 C 118.578 75.732 118.454 75.593 118.516 75.531 C 118.578 75.469 118.717 75.593 118.779 75.531 C 118.84 75.469 118.717 75.331 118.779 75.269 C 118.84 75.207 118.979 75.331 119.041 75.269 C 119.103 75.207 119.002 75.084 119.041 75.006 C 119.152 74.785 119.455 74.703 119.566 74.481 C 119.605 74.403 119.504 74.281 119.566 74.219 C 119.628 74.157 119.767 74.281 119.829 74.219 C 119.89 74.157 119.767 74.018 119.829 73.956 C 119.89 73.894 120.029 74.018 120.091 73.956 C 120.153 73.894 120.052 73.772 120.091 73.694 C 120.146 73.583 120.298 73.542 120.353 73.431 C 120.393 73.353 120.292 73.231 120.353 73.169 C 120.415 73.107 120.554 73.231 120.616 73.169 C 120.678 73.107 120.554 72.968 120.616 72.906 C 120.678 72.844 120.817 72.968 120.878 72.906 C 121.002 72.783 120.755 72.505 120.878 72.381 C 120.94 72.319 121.079 72.443 121.141 72.381 C 121.203 72.319 121.102 72.197 121.141 72.119 C 121.196 72.008 121.348 71.967 121.403 71.856 C 121.443 71.778 121.342 71.656 121.403 71.594 C 121.465 71.532 121.604 71.656 121.666 71.594 C 121.728 71.532 121.627 71.41 121.666 71.331 C 121.721 71.221 121.873 71.18 121.928 71.069 C 121.968 70.991 121.867 70.868 121.928 70.806 C 121.99 70.745 122.129 70.868 122.191 70.806 C 122.278 70.719 122.103 70.369 122.191 70.281 C 122.253 70.22 122.391 70.343 122.453 70.281 C 122.515 70.22 122.392 70.081 122.453 70.019 C 122.515 69.957 122.654 70.081 122.716 70.019 C 123.259 69.476 121.886 70.04 122.978 69.494 C 124.378 68.794 122.191 70.282 123.241 69.232 C 123.303 69.17 123.441 69.293 123.503 69.232 C 123.565 69.17 123.441 69.031 123.503 68.969 C 123.627 68.845 123.905 69.093 124.028 68.969 C 124.09 68.907 123.966 68.768 124.028 68.707 C 124.09 68.645 124.229 68.768 124.291 68.707 C 124.353 68.645 124.229 68.506 124.291 68.444 C 124.353 68.382 124.491 68.506 124.553 68.444 C 124.615 68.382 124.491 68.243 124.553 68.182 C 124.615 68.12 124.754 68.243 124.816 68.182 C 124.878 68.12 124.754 67.981 124.816 67.919 C 124.878 67.857 125.016 67.981 125.078 67.919 C 125.14 67.857 125.016 67.718 125.078 67.657 C 125.14 67.595 125.279 67.718 125.341 67.657 C 125.403 67.595 125.279 67.456 125.341 67.394 C 125.403 67.332 125.541 67.456 125.603 67.394 C 125.665 67.332 125.541 67.194 125.603 67.132 C 125.691 67.044 126.041 67.219 126.128 67.132 C 126.19 67.07 126.066 66.931 126.128 66.869 C 126.19 66.807 126.329 66.931 126.391 66.869 C 126.478 66.782 126.303 66.432 126.391 66.344 C 126.453 66.282 126.591 66.406 126.653 66.344 C 126.777 66.22 126.529 65.943 126.653 65.819 C 126.715 65.757 126.854 65.881 126.916 65.819 C 126.977 65.757 126.854 65.619 126.916 65.557 C 126.977 65.495 127.116 65.619 127.178 65.557 C 127.309 65.425 127.047 64.9 127.178 64.769 C 127.24 64.707 127.379 64.831 127.441 64.769 C 127.572 64.638 127.309 64.113 127.441 63.982 C 127.502 63.92 127.641 64.044 127.703 63.982 C 127.765 63.92 127.703 63.807 127.703 63.719 C 127.703 63.369 127.703 63.019 127.703 62.669 C 127.703 62.582 127.765 62.469 127.703 62.407 C 127.641 62.345 127.502 62.469 127.441 62.407 C 127.379 62.345 127.502 62.206 127.441 62.144 C 127.379 62.083 127.24 62.206 127.178 62.144 C 127.091 62.057 127.266 61.707 127.178 61.619 C 127.116 61.558 126.977 61.681 126.916 61.619 C 126.854 61.558 126.977 61.419 126.916 61.357 C 126.854 61.295 126.715 61.419 126.653 61.357 C 126.566 61.269 126.741 60.919 126.653 60.832 C 126.591 60.77 126.453 60.894 126.391 60.832 C 126.329 60.77 126.453 60.631 126.391 60.57 C 126.329 60.508 126.19 60.631 126.128 60.57 C 126.066 60.508 126.19 60.369 126.128 60.307 C 126.066 60.245 125.928 60.369 125.866 60.307 C 125.804 60.245 125.928 60.106 125.866 60.045 C 125.804 59.983 125.665 60.106 125.603 60.045 C 125.541 59.983 125.665 59.844 125.603 59.782 C 125.541 59.72 125.403 59.844 125.341 59.782 C 125.279 59.72 125.403 59.581 125.341 59.52 C 125.279 59.458 125.156 59.559 125.078 59.52 C 124.968 59.464 124.926 59.312 124.816 59.257 C 124.737 59.218 124.615 59.319 124.553 59.257 C 124.491 59.195 124.615 59.056 124.553 58.995 C 124.466 58.907 124.116 59.082 124.028 58.995 C 123.966 58.933 124.09 58.794 124.028 58.732 C 123.905 58.608 123.627 58.856 123.503 58.732 C 123.441 58.67 123.565 58.531 123.503 58.47 C 123.416 58.382 123.066 58.557 122.978 58.47 C 122.916 58.408 123.04 58.269 122.978 58.207 C 122.855 58.083 122.577 58.331 122.453 58.207 C 122.392 58.145 122.515 58.007 122.453 57.945 C 122.33 57.821 122.052 58.068 121.928 57.945 C 120.879 56.895 123.066 58.382 121.666 57.682 C 121.114 57.406 121.671 57.162 121.403 56.895 C 121.342 56.833 121.141 56.982 121.141 56.895"
          fill="none"
          // className={props.hairBandColor}
          className={hairBand}
          onClick={() => {
            resetAllHovered("hairBandIsHovered");
            toggleIsHovered("hairBandIsHovered");
          }}
        >
          <title>{"elastique"}</title>
        </path>
      </g>
      <g transform="matrix(0.10000000149011612, 0, 0, -0.10000000149011612, 0, 390.00000000000006)">
        <path
          d="M 1155.436 3616.663 C 1148.436 3623.663 1061.135 3658.472 1046.135 3658.472 C 1033.135 3657.472 888.98 3648.472 858.98 3637.472 C 768.98 3604.472 777.221 3536.235 756.221 3526.235 C 735.221 3515.235 710.594 3425.792 697.594 3408.792 C 685.594 3391.792 695.815 3255.519 684.561 3209.552 C 676.476 3176.527 743.834 3043.889 753.834 3018.889 C 756.834 3010.889 860 3044 860 3023 C 860 3011 867 3009 890 3014 C 907 3017 920 3015 920 3010 C 920 3004 914 3000 906 3000 C 899 3000 888 2994 882 2988 C 865 2967 867 2740 885 2663 C 889 2644 886 2640 867 2640 C 812 2640 787 2578 840 2572 C 898 2566 907 2560 914 2529 C 919 2505 915 2491 895 2468 C 848 2412 870 2393 935 2431 C 962 2447 974 2450 982 2442 C 991 2433 983 2420 952 2392 C 929 2370 910 2350 910 2346 C 910 2332 968 2370 985 2396 L 1003 2424 L 1035 2389 C 1053 2369 1072 2345 1079 2334 C 1090 2316 1091 2316 1104 2333 C 1117 2350 1119 2349 1139 2321 C 1151 2305 1177 2284 1198 2275 C 1218 2266 1243 2247 1253 2234 L 1271 2210 L 1232 2210 C 1207 2210 1183 2202 1166 2189 C 1129 2160 1088 2093 1094 2072 C 1101 2052 1055 2030 867 1960 C 584 1856 496 1775 405 1535 C 363 1425 273 1103 244 958 C 218 831 218 826 235 813 C 246 806 260 800 267 800 C 277 800 280 771 280 671 C 280 506 300 435 365 362 C 423 298 451 287 545 292 L 620 295 L 620 262 C 620 239 624 230 633 233 C 639 235 645 252 645 270 C 645 303 648 306 735 348 C 785 372 941 452 1082 526 C 1224 600 1344 660 1349 660 C 1355 660 1379 674 1403 690 C 1428 707 1453 720 1460 720 C 1466 720 1524 698 1589 671 C 1654 644 1730 617 1759 611 C 1805 601 1953 604 2008 616 C 2030 620 2030 620 2024 522 C 2017 421 2033 242 2052 207 C 2066 181 2083 198 2076 231 C 2071 257 2073 260 2096 260 C 2158 260 2272 337 2296 396 C 2305 418 2310 469 2310 540 C 2310 600 2314 650 2319 650 C 2385 650 2868 713 2890 725 C 2906 733 2927 755 2937 773 C 2955 809 3093 1617 3083 1633 C 3072 1651 2709 1624 2436 1585 C 2343 1572 2263 1563 2259 1566 C 2255 1568 2237 1607 2220 1653 C 2154 1822 2119 1860 1983 1910 C 1936 1927 1888 1945 1877 1951 C 1821 1977 1899 1926 1972 1889 C 2095 1824 2124 1790 2185 1633 L 2218 1551 L 2162 1539 C 2084 1523 2063 1512 2046 1476 C 2022 1423 1970 1253 1920 1056 C 1893 953 1869 865 1866 862 C 1861 858 1851 864 1794 905 C 1776 918 1765 918 1695 905 C 1652 896 1614 887 1611 884 C 1605 878 1707 887 1745 896 C 1758 899 1780 890 1805 870 C 1826 853 1850 842 1858 845 C 1868 849 1870 845 1866 834 C 1863 826 1860 814 1860 809 C 1860 795 1812 808 1758 836 C 1707 863 1610 880 1610 862 C 1610 856 1629 849 1653 845 C 1715 834 1769 810 1781 788 C 1801 751 1776 746 1715 774 C 1646 805 1616 806 1572 780 C 1553 768 1522 758 1502 756 C 1482 754 1437 739 1403 721 C 1341 690 1340 690 1321 709 C 1297 733 1280 791 1280 851 L 1280 897 L 1338 910 C 1411 927 1473 948 1480 959 C 1487 970 1721 1040 1752 1040 C 1769 1040 1793 1025 1821 998 C 1850 970 1865 961 1868 970 C 1871 977 1851 1003 1824 1027 C 1779 1066 1771 1070 1736 1065 C 1714 1062 1637 1037 1566 1011 C 1408 952 1330 929 1330 941 C 1330 957 1293 950 1267 930 C 1251 917 1148 884 1003 845 C 872 810 764 782 763 783 C 762 784 768 830 775 885 C 799 1053 791 1273 765 1189 C 758 1168 757 1168 734 1196 L 711 1225 L 730 1173 C 749 1122 749 1117 733 945 C 723 849 712 770 708 770 C 704 770 700 774 700 779 C 700 799 472 858 327 875 C 296 879 270 884 270 887 C 270 904 367 1271 399 1375 C 474 1620 534 1731 628 1802 C 687 1847 741 1873 908 1940 C 981 1969 1057 2003 1077 2017 C 1104 2036 1115 2038 1126 2029 C 1153 2007 1228 1885 1267 1800 C 1306 1716 1349 1663 1357 1687 C 1363 1704 1488 1867 1501 1876 C 1513 1883 1512 1865 1495 1783 C 1488 1755 1493 1746 1538 1698 C 1591 1641 1614 1604 1625 1552 C 1628 1534 1636 1522 1641 1526 C 1657 1535 1651 1573 1625 1628 C 1602 1679 1601 1683 1616 1718 C 1624 1738 1648 1773 1670 1795 C 1691 1817 1722 1863 1738 1898 C 1764 1953 1766 1966 1757 1996 C 1743 2041 1752 2047 1789 2019 C 1832 1987 1832 1938 1788 1880 C 1744 1822 1730 1798 1730 1778 C 1730 1758 1715 1754 1705 1770 C 1693 1789 1671 1780 1649 1748 L 1626 1715 L 1653 1739 L 1680 1764 L 1710 1735 C 1745 1702 1753 1706 1756 1760 C 1758 1795 1800 1867 1832 1891 C 1836 1894 1843 1917 1846 1943 C 1852 1986 1850 1992 1821 2019 L 1790 2048 L 1814 2054 C 1885 2072 1950 2169 1961 2274 C 1964 2313 1973 2374 1980 2410 C 1988 2453 1989 2515 1985 2595 C 1979 2701 1980 2713 1993 2701 C 2014 2684 2075 2690 2075 2710 C 2075 2721 2066 2724 2039 2722 C 2016 2720 1999 2724 1990 2735 C 1976 2752 1960 2899 1971 2906 C 1985 2915 1988 2984 1975 3026 C 1968 3051 1943 3102 1921 3140 C 1898 3178 1880 3215 1880 3223 C 1880 3238 1747 3330 1727 3330 C 1721 3330 1709 3336 1701 3344 C 1692 3352 1636 3369 1576 3381 C 1487 3399 1461 3400 1430 3391 C 1383 3377 1337 3377 1324 3390 C 1316 3398 1242.32 3365.914 1265.32 3388.914 C 1299.32 3422.914 1175.436 3596.663 1155.436 3616.663 Z M 1252 3379 C 1272 3368 1269 3366 1219 3342 C 1154 3311 1023 3185 991 3121 C 960 3061 942 3078 958 3152 C 981 3253 1107 3364 1228 3389 C 1230 3390 1241 3385 1252 3379 Z M 1866 3060 C 1895 3060 1898 3056 1908 3018 C 1919 2974 1935 2820 1928 2820 C 1926 2820 1907 2829 1885 2840 C 1833 2867 1790 2867 1790 2840 C 1790 2827 1799 2819 1818 2814 C 1833 2811 1864 2802 1886 2794 L 1928 2779 L 1935 2650 C 1939 2580 1939 2494 1935 2460 L 1928 2398 L 1896 2428 C 1879 2444 1850 2465 1831 2475 C 1807 2487 1801 2495 1809 2503 C 1838 2532 1809 2610 1768 2610 C 1745 2610 1745 2605 1770 2580 C 1794 2556 1795 2537 1774 2519 C 1760 2508 1753 2509 1728 2523 C 1684 2548 1666 2545 1674 2515 C 1679 2494 1677 2490 1658 2490 C 1597 2490 1473 2406 1450 2350 C 1443 2334 1433 2320 1428 2320 C 1410 2320 1304 2398 1265 2441 C 1243 2465 1216 2504 1206 2528 C 1195 2551 1184 2570 1180 2570 C 1169 2570 1160 2515 1160 2446 L 1159 2385 L 1140 2409 C 1126 2425 1122 2440 1126 2457 C 1133 2482 1132 2483 1097 2476 C 1052 2468 1025 2481 1000 2523 C 969 2573 973 2635 1009 2671 C 1045 2707 1082 2708 1116 2675 C 1141 2650 1156 2642 1145 2659 C 1142 2665 1152 2665 1172 2659 C 1190 2654 1208 2650 1212 2650 C 1225 2650 1221 2731 1205 2795 C 1186 2873 1186 2874 1212 2856 C 1265 2819 1299 2853 1281 2925 C 1275 2948 1268 2974 1264 2983 C 1260 2995 1266 2999 1292 3002 C 1317 3004 1329 3012 1340 3036 L 1356 3066 L 1395 3049 C 1433 3032 1474 3033 1494 3050 C 1498 3055 1544 3056 1594 3053 C 1690 3047 1743 3061 1756 3095 C 1761 3107 1769 3104 1798 3085 C 1818 3071 1849 3060 1866 3060 Z M 1839 2395 C 1855 2387 1875 2365 1884 2345 C 1901 2311 1900 2308 1883 2277 C 1858 2236 1837 2232 1799 2264 C 1756 2300 1728 2297 1692 2253 L 1662 2215 L 1605 2227 C 1536 2242 1500 2263 1500 2291 C 1500 2326 1570 2390 1625 2406 C 1684 2422 1798 2417 1839 2395 Z M 1264 2173 C 1255 2134 1253 2134 1225 2160 C 1196 2187 1201 2200 1241 2200 C 1268 2200 1270 2198 1264 2173 Z M 1243 2116 C 1274 2080 1339 2025 1386 1994 C 1514 1909 1510 1920 1440 1838 C 1406 1799 1372 1757 1363 1744 C 1355 1731 1344 1723 1339 1726 C 1334 1729 1311 1768 1288 1813 C 1241 1908 1201 1968 1147 2027 L 1109 2069 L 1126 2102 C 1150 2148 1171 2180 1179 2180 C 1182 2180 1211 2151 1243 2116 Z M 1453 2101 C 1496 2084 1571 2062 1619 2053 L 1707 2036 L 1723 1989 L 1740 1941 L 1706 1888 C 1687 1859 1658 1822 1640 1805 C 1622 1789 1600 1758 1590 1737 L 1573 1699 L 1546 1731 C 1529 1750 1521 1769 1525 1779 C 1529 1788 1534 1818 1537 1847 C 1545 1916 1530 1937 1427 2004 C 1382 2034 1330 2071 1311 2087 C 1277 2116 1277 2116 1295 2143 L 1312 2170 L 1344 2151 C 1361 2140 1410 2118 1453 2101 Z M 3055 1588 C 3052 1575 3032 1462 3010 1335 C 2914 779 2914 780 2867 760 C 2855 755 2699 735 2520 715 C 2127 672 1868 640 1858 634 C 1853 631 1850 637 1849 647 C 1849 657 1846 660 1843 653 C 1834 629 1770 640 1629 687 L 1489 734 L 1532 746 C 1556 752 1589 764 1607 771 C 1636 783 1645 781 1705 757 C 1741 742 1772 730 1774 730 C 1789 730 1810 765 1805 781 C 1798 803 1800 803 1834 790 C 1859 781 1860 778 1855 723 C 1848 642 1854 660 1901 865 C 1981 1214 2061 1474 2093 1494 C 2148 1529 2718 1603 2973 1608 C 3059 1610 3060 1610 3055 1588 Z M 1242 818 C 1247 767 1263 713 1287 669 C 1289 666 1150 591 977 502 C 653 335 573 304 493 313 C 413 322 346 396 316 512 C 301 572 282 850 294 850 C 311 850 551 789 599 773 L 653 754 L 609 741 C 553 724 497 696 481 676 C 472 666 484 669 511 684 C 536 698 674 739 835 779 C 989 818 1135 857 1160 865 C 1235 888 1237 888 1242 818 Z M 280 835 C 280 812 278 811 260 820 C 237 832 234 846 253 853 C 276 863 280 860 280 835 Z M 2274 588 C 2267 559 2257 508 2254 476 C 2248 428 2241 410 2213 379 C 2194 358 2158 331 2134 319 C 2065 286 2060 296 2053 472 L 2047 618 L 2126 625 C 2169 628 2210 633 2215 635 C 2221 637 2239 639 2257 639 L 2288 640 L 2274 588 Z"
          className={props.strokeColor}
          // onMouseOver={(e) => {
          //   console.log("hey");
          //   e.stopPropagation();
          // }}
        />
        <path
          d="M 1495 2834 C 1456 2814 1420 2780 1420 2764 C 1420 2755 1434 2759 1463 2775 C 1486 2789 1521 2800 1540 2800 C 1584 2800 1605 2813 1597 2834 C 1589 2855 1535 2855 1495 2834 Z"
          style={{
            transformBox: "fill-box",
            transformOrigin: "50% 50%",
          }}
          transform="matrix(0.990268, -0.139173, 0.139173, 0.990268, 0.000006, -0.000011)"
          className={props.strokeColor}
        >
          <title>{"eyebrow"}</title>
        </path>
        <path
          d="M 1509.842 2737.281 C 1500.968 2732.893 1487.774 2719.665 1487.774 2695.665 C 1487.774 2656.665 1502 2639 1523 2642 C 1551 2646 1571 2710 1550 2734 C 1533.947 2747.737 1523.894 2744.229 1509.842 2737.281 Z"
          className={props.eyesColor}
          style={{
            transformBox: "fill-box",
            transformOrigin: "50% 50%",
          }}
        >
          <title>{"eye"}</title>
        </path>
        <path
          d="M1846 2731 c-28 -30 -15 -81 21 -81 18 0 36 38 29 65 -8 30 -30 38 -50 16z"
          style={{
            transformBox: "fill-box",
            transformOrigin: "50% 50%",
          }}
          className={props.eyesColor}
        >
          <title>{"eye"}</title>
        </path>
        <path
          d="M1065 2595 c51 -45 69 -53 80 -34 15 23 -65 79 -112 79 -12 0 -1 -14 32 -45z"
          className={props.strokeColor}
        >
          <title>{"ear"}</title>
        </path>
        <path
          d="M1637 2393 c-29 -28 31 -83 90 -83 37 0 93 42 93 71 0 24 -6 24 -37 -1 -14 -11 -38 -20 -53 -20 -15 0 -35 9 -45 20 -18 20 -36 25 -48 13z"
          className={props.mouthColor}
        >
          <title>{"mouth"}</title>
        </path>
        <path
          d="M1457 1708 c9 -21 26 -41 37 -44 12 -4 29 -13 39 -22 15 -14 17 -14 17 1 0 9 -15 23 -33 31 -19 7 -43 26 -55 42 l-22 29 17 -37z"
          className={props.strokeColor}
        />
        <path
          d="M825 1670 c16 -138 60 -380 68 -380 22 0 -22 294 -59 388 l-14 37 5 -45z"
          className={props.strokeColor}
        />
        <path
          d="M995 1531 c2 -74 7 -136 10 -139 25 -26 27 171 1 233 -16 39 -16 38 -11 -94z"
          className={props.strokeColor}
        />
        <path
          d="M1670 983 c-51 -9 -100 -24 -100 -31 0 -4 47 -1 104 7 l104 15 39 -27 c56 -39 76 -33 29 8 -36 32 -45 35 -95 34 -31 -1 -67 -4 -81 -6z"
          className={props.strokeColor}
        />
        <path
          d="M1340 495 c-90 -138 -99 -155 -80 -155 25 0 192 271 176 287 -3 3 -46 -57 -96 -132z"
          className={props.strokeColor}
        />
      </g>
    </svg>
  );
};