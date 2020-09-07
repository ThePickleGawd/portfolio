// React
import React, { useState } from "react";

// MUI & Theme
import theme from "../Util/theme";
import { withStyles } from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Collapse from "@material-ui/core/Collapse";

const styles = {
  ...theme.spreadIt,
  text: {
    textAlign: "left",
  },
};

function Welcome(props) {
  const { classes } = props;
  const [collapse, setCollapse] = useState(false);

  setTimeout(() => setCollapse(true), 500);

  return (
    <div {...props}>
      <Fade in={true} timeout={5000}>
        <Typography variant="h4" className={classes.text}>
          Hi, I'm Dylan Lu
        </Typography>
      </Fade>
      <Collapse in={collapse} direction={"up"} timeout={3000}>
        <Typography variant="h5" className={classes.text}>
          Software engineer and game programmer
        </Typography>
      </Collapse>
    </div>
  );
}

export default withStyles(styles)(Welcome);
