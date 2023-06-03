/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/entities/**/*.{js,ts,jsx,tsx,mdx}',
    './src/widgets/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        small: '640px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1280px',
        hr: '1536px',
      },
      colors: {
        gray: {
          300: '#A5A5A5',
          500: '#333333',
        },
        orange: {
          300: '#f1c180',
          500: '#F1A33B',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
          width: '100%',
          margin: '0 auto',
          paddingLeft: '16px',
          paddingRight: '16px',
          maxWidth: '500px',
          '@screen small': {
            maxWidth: '640px',
          },
          '@screen tablet': {
            maxWidth: '1024px',
            paddingLeft: '24px',
            paddingRight: '24px',
          },
          '@screen laptop': {
            maxWidth: '1024px',
          },
          '@screen desktop': {
            maxWidth: '1024px',
            paddingLeft: '0px',
            paddingRight: '0px',
          },
          '@screen hr': {
            maxWidth: '1280px',
          },
        },
      })
    },
  ],
}
