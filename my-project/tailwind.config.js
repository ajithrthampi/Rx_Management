/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        vsm: "360px",
        csm: "400px",
        sm: "640px",
        md: "768px",
        slg: "960px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
}

