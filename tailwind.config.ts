import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {

      gridTemplateColumns: {
        'span-full': 'repeat(auto-fill, minmax(0, 1fr))',
      },

      colors: {
        white: "#FBFDF7", 
        black: "#000",
        orange: "#f05136",
        cyan: "#abb8c3",
        vividRed: "#cf2e2e",
        palePink: "#f78da7",
        luminousVividOrange: "#ff6900",
        luminousVividAmber: "#fcb900",
        lightGreenCyan: "#7bdcb5",
        vividGreenCyan: "#00d084",
        paleCyanBlue: "#8ed1fc",
        vividCyanBlue: "#0693e3",
        vividPurple: "#9b51e0",
        pink: "#FFA8BD",
        light: "#FCFDF8",
        lentil: "#B0A580",
        chartreuse: "#CDF851",
        flame: "#FF4A23",
        ochre: "#D98100",
        teal: "#00A19D",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config