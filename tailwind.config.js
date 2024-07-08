/** @type {import('tailwindcss').Config} */
export default {
   content: ['./src/**/*.{html,tsx,ts}'],
   theme: {
      extend: {
         fontFamily: {
            sora: ['Sora'],
            san3: ['Source Sans 3'],
         },
         color: {
            gr: ['rgba(0, 68, 3, 1)'],
         },
      },
   },
   plugins: [],
};
