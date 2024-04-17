import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lale': "./public/asset/fonts/lalezar/Lalezar-Regular.ttf"
      },
      backgroundImage: {
        'hero-pattern': "url('../../public/asset/images/hero.png')",
        'tapsi': "url('../../public/asset/images/tapsi.png')"
      },
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.40)',
        "my-orange": "#ED6C02"
      },
      boxShadow: {
        'manual': '40px 50px 80px -20px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
};
export default config;
