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
        spark: {
          primary: "#1A3C2E",
          accent: "#C9982A",
          bg: "#F8F6F1",
          dark: "#0D1F17",
          text: "#1C1C1C",
        },
      },
      letterSpacing: {
        tightest: "-0.04em",
        wider2: "0.2em",
      },
      animation: {
        ticker: "ticker 38s linear infinite",
      },
      keyframes: {
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;