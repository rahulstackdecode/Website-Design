module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./src/**/*.{js,ts,jsx,tsx}", // important for your components!
    ],
    theme: {
      extend: {
        animation: {
          rotateme: "rotateme 15s linear infinite",
        },
        keyframes: {
          rotateme: {
            "0%": { transform: "rotate(0deg)" },
            "100%": { transform: "rotate(360deg)" },
          },
        },
      },
    },
    plugins: [],
  }
  