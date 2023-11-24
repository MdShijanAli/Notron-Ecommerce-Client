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
        footer: '#222222',
        bannerBg: '#3F99F1'
        // Add more custom colors as needed
      },
      fontSize: {
            // 5 Extra Large
        'h3': '18px',
        'footerBody': '14px',
        'banner': '80px',
        'bannerParagraph': '24px',
        'ctah1': '36px'
        // 6 Extra Large
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

