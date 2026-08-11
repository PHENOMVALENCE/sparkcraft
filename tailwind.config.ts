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
          "primary-light": "#2A5240",
          accent: "#C9982A",
          "accent-hover": "#D4A83A",
          bg: "#F8F6F1",
          surface: "#FFFFFF",
          dark: "#0D1F17",
          "dark-soft": "#142820",
          text: "#1C1C1C",
          muted: "#5C5C5C",
          border: "#E5E0D4",
        },
        sg: {
          DEFAULT: "#1E6B3C",
          dark: "#14522C",
          lime: "#8BC34A",
          soft: "#F3F8F4",
        },
      },
      fontSize: {
        "display-xl": ["clamp(2.25rem,5vw,4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "900" }],
        "display-md": ["clamp(1.875rem,3.5vw,3rem)", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "900" }],
        "display-sm": ["clamp(1.5rem,2.5vw,2rem)", { lineHeight: "1.2", letterSpacing: "-0.02em", fontWeight: "700" }],
      },
      maxWidth: {
        prose: "65ch",
        "prose-wide": "75ch",
      },
      letterSpacing: {
        tightest: "-0.04em",
        wider2: "0.2em",
      },
      transitionDuration: {
        DEFAULT: "200ms",
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
