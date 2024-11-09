/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './node_modules/@shadcn/ui/dist/**/*.{js,jsx,ts,tsx}',  // Add this line to include ShadCN UI components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

