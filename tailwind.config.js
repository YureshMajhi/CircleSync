/** @type {import('tailwindcss').Config} */
module.exports = {
  // Point this to your NEW src directory
  content: ["./src/app/**/*.{js,jsx,ts,tsx}", "./src/components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: "#FFF6F6",
        foreground: "#2C687B",
        card: "#FFFFFF",
        muted: "#E8F4F3",
        "muted-foreground": "#2C687B",
        primary: "#2C687B",
        accent: "#DB1A1A",
        border: "rgba(44, 104, 123, 0.1)",
        success: "#8CC7C4",
        destructive: "#DB1A1A",
        circle: {
          soft: "#8CC7C4",
          deep: "#2C687B",
        },
      },
      fontFamily: {
        sans: ["sans-regular"],
        "sans-light": ["sans-light"],
        "sans-medium": ["sans-medium"],
        "sans-semibold": ["sans-semibold"],
        "sans-bold": ["sans-bold"],
        "sans-extrabold": ["sans-extrabold"],
      },
    },
  },
  plugins: [],
};

