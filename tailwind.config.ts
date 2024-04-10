import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../../public/asset/images/hero.png')",
        'tapsi': "url('../../public/asset/images/tapsi.png')"
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.40)',
      },
    },
  },
  plugins: [],
};
export default config;
