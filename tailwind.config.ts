import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "vega-blue": "#2d467c",
        "vega-pink": "#fa06a6",
        "vega-pink-light": "#fecded",
        "background": "#F5F5F5"
      },
    },
  },
  plugins: [],
  important: true,
};
export default config;
