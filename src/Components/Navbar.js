// React
import React, { Component } from "react";
import PropTypes from "prop-types";

// MUI & Theme
import theme from "../Util/theme";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const styles = {
  ...theme.spreadIt,
  button: {
    ...theme.button,
    height: "50px",
    color: "white",
  },
  navBar: {
    backgroundColor: theme.palette.primary.main,
  },
};

export class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.navBar}>
        <Grid container justify="center" spacing={0}>
          <Grid item xs={0}>
            <Button href="/" className={classes.button}>
              Home
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button href="/projects" className={classes.button}>
              Projects
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button href="/articles" className={classes.button}>
              Articles
            </Button>
          </Grid>
          <Grid item xs={0}>
            <Button href="/about" className={classes.button}>
              About
            </Button>
          </Grid>
        </Grid>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);
