/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        slab: ["Roboto Slab", "serif"], // Add "Roboto Slab" as a custom font family
      },
    },
  },
  plugins: [],
};
