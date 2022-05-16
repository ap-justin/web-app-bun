module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      animation: {
        iconPing: "ping 100ms",
      },
      backgroundImage: {
        banner:
          "linear-gradient(rgba(63, 169, 245, 0.7),rgba(63, 169, 245, 0.7)), url('./assets/images/home-banner.jpg')",
        process:
          "linear-gradient(rgba(51, 133, 189, 0.85),rgba(51, 133, 189, 0.85)), url('assets/images/home-process.jpg')",
        portal:
          "linear-gradient(rgba(63, 169, 245, 0.9),rgba(51, 133, 189, 0.85)), url('assets/images/teamwork2.jpg')",
        contact:
          "linear-gradient(rgba(51, 133, 189, 0.85),rgba(51, 133, 189, 0.85)), url('assets/images/volunteers2.jpg')",
        "banner-charity":
          "linear-gradient(rgba(51, 133, 189, 0.85),rgba(51, 133, 189, 0.85)), url('./assets/images/banner-charity.jpg')",
        "banner-charities":
          "linear-gradient(rgba(51, 133, 189, 0.85),rgba(51, 133, 189, 0.85)), url('assets/images/deliveries.jpg')",
        "banner-donors":
          "linear-gradient(rgba(51, 133, 189, 0.85),rgba(51, 133, 189, 0.85)), url('assets/images/hand.jpg')",
        comet: "url('assets/images/comet.jpg')",
        auction: "linear-gradient(67deg, #9cc9e924, #66accd59)",
      },
      boxShadow: {
        "3xl": "0 1px 9px 1px  rgba(0, 0, 0, 0.3)",
      },
      cursor: {
        grab: "grab",
        grabbing: "grabbing",
      },
      colors: {
        "bright-green": "#6ED482",
        "angel-orange": "#FAAC2E",
        "angel-blue": "#3FA9F5",
        "thin-blue": "#54A3D9",
        "blue-accent": "#3385BD",
        "blue-dark": "#1a4f72",
        "angel-grey": "#4F5F6F",
        "grey-accent": "#ADB7BE",
        "white-grey": "#FAFAFA",
        "light-grey": "#EFEFEF",
        "thin-grey": "#ECEDEE",
        "black-blue": "#252626",
        "leaf-green": "#88B752",
        orange: "#F59700",
        "yellow-blue": "#22CCDD",
        "dark-red": "#8A3F30",
        "failed-red": "#FE4454",
        "light-blue": "#1b9cef",
        "bright-blue": "#64c1fc",

        //standard sdg colors
        sdg1: "#e5233d",
        sdg2: "#dda73a",
        sdg3: "#4ca146",
        sdg4: "#c5192d",
        sdg5: "#ef402c",
        sdg6: "#27bfe6",
        sdg7: "#fbc412",
        sdg8: "#a31c44",
        sdg9: "#f26a2d",
        sdg10: "#e01483",
        sdg11: "#f89d2a",
        sdg12: "#bf8d2c",
        sdg13: "#407f46",
        sdg14: "#1f97d4",
        sdg15: "#59ba48",
        sdg16: "#126a9f",
        sdg17: "#13496b",
      },

      borderColor: {
        "angel-orange": "#FAAC2E",
        "angel-blue": "#3FA9F5",
        "thin-blue": "#54A3D9",
        "light-grey": "#f5f5f5",
      },

      fontSize: {
        "2xs": ["0.56rem", "0.7rem"],
        "4.5xl": "2.625rem",
      },
      fontFamily: {
        heading: ["Montserrat", "serif"],
        body: ["Open Sans", "sans-serif"],
      },
      height: {
        "fixed-content-height": "calc(100vh - 7rem);",
        "donate-content-height": "calc(100% - 7.5rem)",
        info: "28rem",
        process: "36rem",
        banner: "calc(100vh - 6rem);",
        "banner-sm": "35rem",
        "leader-table": "50rem",
        "withdraw-table": "36rem",
      },
      gridTemplateRows: {
        "1a": "1fr auto",
        a1: "auto 1fr",
        a1a: "auto 1fr auto",
        a11: "auto 1fr 1fr",
        aa1: "auto auto 1fr",
        dashboard: "auto 1fr auto",
        wallet: "auto 1fr 1fr",
        "2a": "repeat(2,auto)",
        fund: "18rem auto",
      },
      gridTemplateColumns: {
        "1a": "1fr auto",
        a1: "auto 1fr",
        a1a: "auto 1fr auto",
        aa1: "auto auto 1fr",
        32: "3fr 2fr",
        "21a": "2fr 1fr auto",
      },
      inset: {
        12: "12px",
        69: "69px",
      },
      spacing: {
        20: "20%",
        23: "23px",
        15: "15px",
      },
      maxWidth: {
        "4/5": "80%",
        500: "500px",
        450: "450px",
        600: "600px",
        250: "250px",
      },
      minWidth: {
        36: "36",
        200: "200px",
        250: "250px",
        300: "300px",
        450: "450px",
        600: "600px",
        136: "36rem",
        160: "60rem",
      },
      minHeight: {
        115: "15rem",
        modal: "300px",
        "leader-table": "50rem",
        "withdraw-table": "36rem",
        110: "10rem",
        "1/3": "25%",
        "1/2": "50%",
        "3/4": "75%",
      },
      maxHeight: {
        "1/3": "25%",
        "1/2": "50%",
        "3/4": "75%",
        116: "16rem",
        600: "600px",
        modal: "300px",
        280: "280px",
        "75vh": "75vh",
        350: "350px",
      },
      width: {
        109: "9rem",
        115: "15rem",
        120: "20rem",
        128: "28rem",
        130: "30rem",
        135: "35rem",
        "1/3": "25%",
        "1/2": "50%",
        "3/4": "75%",
        fill: "-webkit-fill-available",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
