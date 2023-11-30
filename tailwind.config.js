/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.{vue,js,ts,jsx,tsx}',
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Add your custom colors here
        primary: '#EB3E32',
        secondary: '#ffed4a',
        background: '#F4F4F4',
        paragraph: '#454545',
        footer: '#26292E',
        bannerBg: '#3F99F1',
        product: '#666666',
        headingPara: '#595959',
        savingBG: '#11141C',
        homeInfoBG: '#F3F3F3',
        footerBottom: '#36393F'
        // Add more custom colors as needed
      },
      fontSize: {
            // 5 Extra Large
        'h3': '18px',
        'footerBody': '14px',
        'banner': '80px',
        'bannerParagraph': '24px',
        'ctah1': '36px',
        'h1': '48px',
        'h2': '26px',
        'head': '60px'
        
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

