import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        helight: ["Helight", "sans-serif"],
        thehand: ["TheHand", "serif"],
        typewritter: ["TypeWritter", "monospace"],
        hartsfolk : ["Hartsfolk"]
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
