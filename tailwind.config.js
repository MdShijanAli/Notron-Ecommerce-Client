/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: '#EB3E32',
        secondary: '#ffed4a',
        background: '#F4F4F4',
        paragraph: '#454545',
        footer: '#222222'
        // Add more custom colors as needed
      },
      fontSize: {
        // Add your custom font sizes here
        'xs': '.75rem',    // Extra Small
        'sm': '.875rem',   // Small
        'base': '1rem',    // Default/Base
        'lg': '1.125rem',  // Large
        'xl': '1.25rem',   // Extra Large
        '2xl': '1.5rem',   // 2 Extra Large
        '3xl': '1.875rem', // 3 Extra Large
        '4xl': '2.25rem',  // 4 Extra Large
        '5xl': '3rem',     // 5 Extra Large
        'h3': '18px',
        'footerBody': '14px' // 6 Extra Large
        // Add more custom font sizes as needed
      },
    },
  },
  plugins: [
    require('preline/plugin'),
    require('flowbite/plugin'),
    require("daisyui"),
  ],
}

