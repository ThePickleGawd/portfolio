import { createTheme } from "@mui/material/styles";
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
      "Moderne Sans",
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
    h1: {
      wordSpacing: "-35px",
    },
    h2: {
      wordSpacing: "-25px",
    },
    h3: {
      wordSpacing: "-15px",
    },
    h4: {
      wordSpacing: "-10px",
    },
    h5: {
      wordSpacing: "-5px",
    },
    h6: {
      wordSpacing: "-5px",
    },
    subtitle1: {
      wordSpacing: "-5px",
    },
    subtitle2: {
      wordSpacing: "-5px",
    },
    body1: {
      wordSpacing: "-5px",
    },
    body2: {
      wordSpacing: "-5px",
    },
    caption: {
      wordSpacing: "-5px",
    },
    button: {
      wordSpacing: "-5px",
    },
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
});

export default theme;

/* To test out fonts
return (
    <div>
      <Typography variant="h1">This is a cool test</Typography>
      <Typography variant="h2">This is a cool test</Typography>
      <Typography variant="h3">This is a cool test</Typography>
      <Typography variant="h4">This is a cool test</Typography>
      <Typography variant="h5">This is a cool test</Typography>
      <Typography variant="h6">This is a cool test</Typography>
      <Typography variant="subtitle1">This is a cool test</Typography>
      <Typography variant="subtitle2">This is a cool test</Typography>
      <Typography variant="body1">This is a cool test</Typography>
      <Typography variant="body2">This is a cool test</Typography>
      <Typography variant="button">This is a cool test</Typography>
      <Typography variant="caption">This is a cool test</Typography>
      <Typography variant="overline">This is a cool test</Typography>
    </div>
  );
*/
