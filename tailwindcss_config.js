/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/assets/images/ruszt.jpg')",
      },

        fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        gothic: ['Gothic A1', 'sans-serif'],
      },

    },
  },
  plugins: [],
};