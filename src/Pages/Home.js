// React & Components
import React, { Component } from "react";
import Welcome from "../Components/Welcome";

// MUI & Theme
import theme from "../Util/theme";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

const styles = {
  ...theme.spreadIt,
  root: {},
  welcome: {
    position: "absolute",
    left: "20%",
    top: "30%",
  },
};

export class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.welcome}>
          <Fade in={true} timeout={5000}>
            <Welcome />
          </Fade>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
