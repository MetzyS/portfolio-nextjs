import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "inner-xl-default": "inset 0 15px 20px 0 rgba(0, 0, 0, 0.06)",
        "inner-xl-dark": "inset 0 15px 20px 0 rgba(0,0,0,0.3)",
        // "inner-xl-dark": "inset 0 15px 20px 0 rgba(0, 0, 0, 0.06)",
      },
      fontFamily: {
        ubuntu: ["Ubuntu", "mono"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "350px",
      },
      colors: {
        dark: {
          default: "#1b1b21",
        },
      },
    },
  },
  plugins: [],
};
export default config;
