/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      fontFamily: {
      zcool: ['"ZCOOL QingKe HuangYou"', 'sans-serif'], // 定义新的字体族
      noto:["Noto Sans SC",'sans-serif']
    },
    },
  },
  plugins: [],
}

