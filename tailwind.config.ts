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
        ink: {
          DEFAULT: '#141412',
          muted: '#3d3d38',
          soft: '#5c5c55',
        },
        paper: {
          DEFAULT: '#faf8f4',
          alt: '#f3efe8',
          deep: '#e8e2d8',
          stone: '#edeae3',
          sage: '#eef2ec',
          warm: '#f7f3ec',
        },
        accent: {
          DEFAULT: '#2f4a36',
          muted: '#4a6b52',
          light: '#dce8de',
        },
        border: {
          DEFAULT: '#d8d4cb',
          light: '#e8e4dc',
        },
        // Legacy aliases — muted for compatibility
        'earth-green': '#8fa892',
        'clay-beige': '#f7f5f0',
        'moss-brown': '#1c1c1a',
        'sunlit-amber': '#c4b08a',
        'fern': '#2f4a36',
        'river-blue': '#5a7260',
        'fern-dark': '#1f3325',
        'amber-dark': '#a89670',
      },
      fontFamily: {
        serif: ['Libre Baskerville', 'Georgia', 'serif'],
        sans: ['Open Sans', 'system-ui', 'sans-serif'],
        lato: ['Open Sans', 'system-ui', 'sans-serif'],
        montserrat: ['Open Sans', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        editorial: '76rem',
        reading: '40rem',
        narrow: '34rem',
      },
      spacing: {
        section: '7rem',
        'section-lg': '9rem',
      },
    },
  },
  plugins: [],
};

export default config;
