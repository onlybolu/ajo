/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  
      // This line explicitly ignores Bootstrap or any node_modules CSS
      "!./node_modules/**/*"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
