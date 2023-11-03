/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      maxWidth: {
        center:'1260px'
      },
      spacing: {
        'center': '1260px',
      }
    },
  },
  plugins: [require('@tailwindcss/typography')],
}

