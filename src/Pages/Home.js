// React & Components
import React, { Component } from "react";
import Welcome from "../Components/Welcome";

// MUI & Theme
import theme from "../Util/theme";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  ...theme.spreadIt,
  root: {},
  welcome: {
    position: "absolute",
    left: "15%",
    top: "20%",
  },
};

export class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.welcome}>
          <Welcome />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
