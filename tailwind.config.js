module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'uber-medium': ['Uber Move Medium', 'sans-serif'],
        'uber-bold': ['Uber Move Bold', 'sans-serif'],
        'uber-text': ['Uber Move Text Regular', 'sans-serif'],
        'uber-text-medium': ['Uber Move Text Regular', 'sans-serif'],
        'uber-text-bold': ['Uber Move Text Bold', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
