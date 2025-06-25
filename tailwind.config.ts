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
        // Child Arise Tennessee Brand Colors
        'earth-green': '#A3C9A8',
        'clay-beige': '#F7F3EF',
        'moss-brown': '#000000', // Changed from #5A5A42 to black
        'sunlit-amber': '#E4CDA1',
        'fern': '#6C9A74',
        'river-blue': '#749DAF',
        // Additional shades for hover states
        'fern-dark': '#5A8664',
        'amber-dark': '#DABF8F',
      },
      fontFamily: {
        'lato': ['Lato', 'sans-serif'],
        'montserrat': ['Montserrat', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(180deg, #F7F3EF 0%, rgba(247, 243, 239, 0.6) 100%)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      boxShadow: {
        'navbar': '0 1px 6px rgba(0,0,0,0.05)',
        'soft': '0 4px 20px rgba(0,0,0,0.08)',
        'fern/20': '0 10px 30px rgba(108, 154, 116, 0.2)',
        'sunlit-amber/20': '0 10px 30px rgba(228, 205, 161, 0.2)',
        'earth-green/20': '0 10px 30px rgba(163, 201, 168, 0.2)',
        'black/20': '0 10px 30px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(30px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config; 