import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'], // Default body font
        display: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'], // Headings font
      },
      colors: {
        // Warm, homey color palette
        base: {
          white: '#fefefe',
          cream: '#f7f3f0', // Coffee cream background
          light: '#e8ddd6', // Light coffee background
          beige: '#d4c4b8', // Coffee beige
          dark: '#2d1f16', // Deep coffee dark
          text: '#4a3425', // Coffee brown text
        },
        brown: {
          50: '#f7f3f0',
          100: '#e8ddd6',
          200: '#d4c4b8',
          300: '#b8a089',
          400: '#9c7c5c',
          500: '#8b6f47',
          600: '#7a5d3c',
          700: '#654c32',
          800: '#4a3425',
          900: '#3d2b1e',
          950: '#2d1f16',
        },
        yellow: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
          950: '#422006',
        },
        warm: {
          yellow: '#d4a574', // Coffee-complementing yellow
          gold: '#b8965a', // Deep coffee gold
          amber: '#9c7c5c', // Coffee amber
          honey: '#8b6f47', // Coffee honey
        },
        gradient: {
          brownYellow: 'linear-gradient(135deg, #654c32 0%, #d4a574 100%)',
          warmGold: 'linear-gradient(135deg, #4a3425 0%, #b8965a 100%)',
          cozy: 'linear-gradient(135deg, #2d1f16 0%, #9c7c5c 50%, #d4a574 100%)',
        },
      },
      boxShadow: {
        soft: '0 2px 10px rgba(0,0,0,0.06)',
        card: '0 4px 20px rgba(0,0,0,0.08)',
      },
      borderRadius: {
        DEFAULT: '0.75rem', // xl as default
        '2xl': '1rem',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}

export default config
