// React
import React, { Component } from "react";

// MUI & Theme
import theme from "../Util/theme";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = {
  ...theme.spreadIt,
};

export class Home extends Component {
  render() {
    return (
      <div>
        <Grid container></Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
