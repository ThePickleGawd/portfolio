import { createTheme, adaptV4Theme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "##bdbdbd",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#000000",
    },
    mode: "dark",
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        ::-webkit-scrollbar {
          width: 10px;
        }
  
        ::-webkit-scrollbar-track-piece {
          background-color: #00000;
        }
  
        ::-webkit-scrollbar-thumb {
          background-color: #FFF;
          border: .1px solid #B7B7B7;
        }
  
        ::-webkit-scrollbar-thumb:hover: {
          background-color: #909090
        }
      `,
    },
  },
  // overrides: {
  //   MuiCssBaseline: {
  //     "@global": {
  //       "::-webkit-scrollbar": {
  //         width: "10px",
  //       },

  //       "::-webkit-scrollbar-track-piece": {
  //         backgroundColor: "#00000",
  //       },

  //       "::-webkit-scrollbar-thumb": {
  //         backgroundColor: "#FFF",
  //         border: ".1px solid #B7B7B7",
  //       },

  //       "::-webkit-scrollbar-thumb:hover": {
  //         backgroundColor: "#909090",
  //       },
  //     },
  //   },
  // },
});

export default theme;
