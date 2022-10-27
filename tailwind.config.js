// tailwind.config.js
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js}"],
    purge: [
      // ...
      'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', // path to vechaiui
    ],
    darkMode: "class", // or 'media' or 'class'
    theme: {
      colors: {
        transparent: 'transparent',
        comment: '#6272a4',
      },
      extend: {},
    },
    variants: {
      extend: {},
    },
    plugins: [
      require("@tailwindcss/forms"),
      require('flowbite/plugin'),
    ],
  };