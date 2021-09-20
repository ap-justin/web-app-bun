module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false,
  theme: {
    extend: {
      animation: {
        iconPing: "ping 100ms",
      },
      backgroundImage: {
        banner:
          "linear-gradient(rgba(63, 169, 245, 0.7),rgba(63, 169, 245, 0.7)), url('./assets/images/home-banner.jpg')",
        process:
          "linear-gradient(rgba(51, 133, 189, 0.85),rgba(51, 133, 189, 0.85)), url('./assets/images/home-process.webp')",
        portal:
          "linear-gradient(rgba(51, 133, 189, 0.85),rgba(51, 133, 189, 0.85)), url('./assets/images/teamwork.webp')",
        contact:
          "linear-gradient(rgba(51, 133, 189, 0.85),rgba(51, 133, 189, 0.85)), url('./assets/images/volunteers.webp')",
        "banner-charity":
          "linear-gradient(rgba(51, 133, 189, 0.85),rgba(51, 133, 189, 0.85)), url('./assets/images/banner-charity.jpg')",
      },

      cursor: {
        grab: "grab",
        grabbing: "grabbing",
      },
      colors: {
        "angel-orange": "#FAAC2E",
        "angel-blue": "#3FA9F5",
        "thin-blue": "#54A3D9",
        "blue-accent": "#3385BD",
        "angel-grey": "#4F5F6F",
        "grey-accent": "#ADB7BE",
        "white-grey": "#FAFAFA",
        "light-grey": "#f5f5f5",
        "thin-grey": "#ECEDEE",
        "black-blue": "#252626",
        "leaf-green": "#88B752",
        orange: "#F59700",
        "yellow-blue": "#22CCDD",
        "dark-red": "#8A3F30",
        "failed-red": "#EE4444",
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
        "fixed-content-height": "calc(100vh - 9.25rem);",
        "donate-content-height": "calc(100% - 7.5rem)",
        info: "28rem",
        process: "36rem",
        banner: "calc(100vh - 6rem);",
        "banner-sm": "35rem",
        specs: "40rem",
      },
      gridTemplateRows: {
        "1a": "1fr auto",
        a1: "auto 1fr",
        a1a: "auto 1fr auto",
        a11: "auto 1fr 1fr",
        dashboard: "auto 1fr auto",
        wallet: "auto 1fr 1fr",
        "2a": "repeat(2,auto)",
      },
      gridTemplateColumns: {
        "1a": "1fr auto",
        a1: "auto 1fr",
        a1a: "auto 1fr auto",
        charity: "auto 1fr",
      },
      inset: {
        12: "12px",
        69: "69px",
      },
      maxWidth: {
        "4/5": "80%",
      },
      minWidth: {
        36: "36",
      },
      minHeight: {
        r15: "15rem",
        modal: "300px",
        10: "10",
      },
      width: {
        "video:xl": "35rem",
        "video:lg": "28rem",
        "video:md": "30rem",
        "video:sm": "30rem",
      },
      animation: {
        iconPing: "ping 100ms",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["disabled"],
    },
  },
  plugins: [],
};
