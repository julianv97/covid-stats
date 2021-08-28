module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    fontFamily: {
      montserrat: "Montserrat",
    },
      extend: {
        colors: {
            "regal-blue": "#3456FF",
            "regal-gray": "F8F8FA",
            "regal-white": "#EEEDF0",
            "regal-black": "#17181F",
            "regal-purple": "#6C72CB",
            "regal-pink": "#CB69B1",
            'regal-green': 'rgb(46, 102, 84)',
            'celeste':'rgb(145, 190, 204)',
            'brown':'rgb(65, 4, 4)'
          },
          animation: {
              bounce200: 'bounce 1s infinite 200ms',
              bounce400: 'bounce 1s infinite 400ms',
          },
          spacing: {
            100: "32rem",
            98: "28rem",
          },
      },
  },
  plugins: [],
};