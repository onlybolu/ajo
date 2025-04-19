export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      // avoid scanning node_modules/bootstrap
      "!./node_modules/**/*"
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  }
  