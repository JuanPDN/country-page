import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      "1B1D1F": "#1B1D1F",
      "282B30": "#282B30",
      "4E80EE": "#4E80EE",
      "6C727F": "#6C727F",
      "D2D5DA": "#D2D5DA",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "hero":'url("/hero-image-wr.jpg")'
      },
    },
  },
  plugins: [],
};
export default config;
