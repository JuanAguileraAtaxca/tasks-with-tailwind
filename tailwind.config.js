/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors:{

      }, 
      keyframes:{
        "jump-out": {
          "0%": {opacity: "100%"},
          "100%": {opacity: "0%"}
        },
        "jump-in": {
          "0%": {
            opacity: "0%", 
          },
          "100%": {
            opacity: "100%"
          }
        },
        "left-to-right": {
          "0%": {left: "-100%"},
          "25%":{left: "-50%"},
          "50%": {left: "0%"},
          "100%": {right: "0%"}
        }
      },
      animation: {
        "jump-out": "jump-out 1s ease-in-out",
        "jump-in": "jump-in 1.5s ease-in-out",
        "left-to-right": "left-to-right 2s linear"
      }
    },
  },
  plugins: [],
}

