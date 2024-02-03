/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "grey-white": "#fff",
        "purple-3": "#f7f5f9",
        "grey-darkest": "#08090a",
        "primary-full": "#8064a2",
        plum: "#997dbd",
        darkgray: "#939ca3",
        "blue-2": "#f7fdff",
        "blue-1": "#0096c8",
        "base-black": "#000",
        "purple-2": "#ccc1da",
        "grey-darker": "#6d747a",
        "grey-light": "#ced4da",
        "grey-hover": "#f8f9fa",
        whitesmoke: "#ebedf0",
        red: "#c0504d",
        green: "#77933c",
      },
      spacing: {},
      fontFamily: {
        "text-sm-bold": "Poppins",
      },
      borderRadius: {
        "12xs-4": "0.4px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      xl: "20px",
      "17xl": "36px",
      "10xl": "29px",
      "3xl": "22px",
      lg: "18px",
      "5xl": "24px",
      lgi: "19px",
      base: "16px",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
