import { createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#8AC7DB",
      main: "#ADD8E6",
      dark: "#43A6C6",
    },
    secondary: {
      main: "#DCAE96",
      dark: "#D19374 ",
    },
  },
  spreadIt: {
    button: {},
  },
});

export default theme;
