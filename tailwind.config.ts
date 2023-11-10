import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        react: "#5ed4f3",
        typescript: "#3c76c6",
        github: "#000000",
        "next.js": "#313131",
        tailwind: "#3d92b1",
        prisma: "#123249",
        mongodb: "#4ca53f",
        redux: "#7648bc",
        sql: "#d47131",
        framer: "#7315f1",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
