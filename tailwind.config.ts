import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "20px",
      screens: {
        "2xl": "1260px",
      },
    },
    extend: {
      colors: {
        primary: "#9D977A",
        "primary-dark": "#847e62",
        secondary: "#000000",
        base: "#5C5C5C",
        danger: "#D04555",
        "danger-dark": "#a32937",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
