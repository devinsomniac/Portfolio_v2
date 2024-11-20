import type { Config } from "tailwindcss";

export default {
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
//   
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
