import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: "0.6875rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.875rem",
      "3xl": "3.125rem",
    },
    screens: {
      xs: "375px",
      sm: "480px",
      md: "512px",
      lg: "768px",
      xl: "1024px",
      "2xl": "1280px",
      "3xl": "1536px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "neutral-white": "#FFFFFF",
        "neutral-gray-4": "#D9D9D9",
        "neutral-gray-3": "#A9A9A9",
        "neutral-gray-2": "#797979",
        "neutral-gray-1": "#484848",
        "neutral-black": "#000000",

        "primary-100": "#129575",
        "primary-80": "#71B1A1",
        "primary-60": "#AFD3CA",
        "primary-40": "#DBEBE7",
        "primary-20": "#F6FAF9",

        "secondary-100": "#FF9C00",
        "secondary-80": "#FFA61A",
        "secondary-60": "#FFBA4D",
        "secondary-40": "#FFCE80",
        "secondary-20": "#FFE1B3",

        "success": "#31B057",
        "warning-100": "#804E00",
        "warning-80": "#995E00",
      },
      fontSize: {
        "4xl": "3.25rem",
        "5xl": "3.5rem"
      }
    },
  },
  plugins: [],
};

export default config;
