import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        'custom': ['font-sans', 'FallbackFont', 'sans-serif'],
      },
      colors: {
        primary: {
          100: '#070807',
          200: '#172217',
          300: '#211ddb',
          400: '#172222',
          500: '#121212',
        },
        secondary: {
          100: '#d1e63e',
          200: '#516aec',
          300: '#342d99',
          400: '#f310e1',
          500: '#20e62e',
          600: '#6ce316',
        },
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '976px',
        xl: '1440px',
      },
    },
  },
  plugins: [
    
  ],
};
export default config;
