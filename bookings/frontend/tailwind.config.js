/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'gotham-bold': ['Gotham Bold','sans'],
        'gotham-bold-italic': ['Gotham Bold Italic','sans'],
        'gotham-book': ['Gotham Book','sans'],
        'gotham-book-italic': ['Gotham Book Italic','sans'],
        'gotham-light': ['Gotham Light','sans'],
        'gotham-light-italic': ['Gotham Light Italic','sans'],
        'gotham-medium': ['Gotham Medium','sans'],
        'gotham-medium-italic': ['Gotham Medium Italic','sans'],
      },
      borderRadius: {
        '10xl': '10rem', // Adjust the value as needed
      },
    },
  },
  plugins: [],
}

