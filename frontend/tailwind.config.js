/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/*.jsx", "./src/components/*.jsx", "./*.html"],
  theme: {
    extend: {
        colors: {
          'notenapp-blue': '#008ee6',
          'notenapp-blue-hover': '#006eb2',
        },
    },
  },
  plugins: [],
}

