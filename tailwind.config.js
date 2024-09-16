/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        vibrantRed: "#E10600", // Customize the vibrant red color
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        "fade-in": "fadeIn 1.5s ease-in-out",
        "fade-in-up": "fadeInUp 1s ease-out",
        "fade-in-down": "fadeInDown 1s ease-out",
      },
    },
  },
  plugins: [],
};
