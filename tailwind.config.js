module.exports = {
  content: ["./src/**/*.{html,js}", "./index.html", "./card1.html"],
  theme: {
    extend: {
      screens: {
        "max-lg": { max: "1024px" },
        "max-md": { max: "768px" },
        "max-sm": { max: "640px" },
        "max-xs": { max: "480px" },
      },
    },
  },
  plugins: [],
};
