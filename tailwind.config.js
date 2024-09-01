/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'pc': '700px',
      'mini': '400px',
    },
    extend: {},
    fontFamily: {
      noto_sans: ["noto-sans"],
      Freesentation: ["Freesentation"],
      pop: ["pop"],
      Pretendard: ["Pretendard-Medium"],
    },
  },
  plugins: [],
}
