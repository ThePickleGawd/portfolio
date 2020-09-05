// React & Components
import React, { Component } from "react";
import ProjectThumbnail from "../Components/ProjectThumbnail.js";

// MUI & Theme
import theme from "../Util/theme";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

//TEST
import testImage1 from ".././Images/testImage1.JPG";
import testImage2 from ".././Images/testImage2.JPG";
import testImage3 from ".././Images/testImage3.JPG";

const styles = {
  ...theme.spreadIt,
  root: {},
  gridContainer: {
    paddingLeft: "20px",
    paddingRight: "20px",
  },
};

export class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: "test project",
          category: "test category",
          data: [],
          link: "/8ghskl",
          image: { testImage1 },
        },
        {
          title: "another one",
          category: "another category",
          data: [],
          link: "/jfs2a3",
          image: { testImage2 },
        },
        {
          title: "last one",
          category: "final category",
          data: [],
          link: "/random3",
          image: { testImage3 },
        },
      ],
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography variant="h2">Projects</Typography>
        <Grid
          container
          spacing={5}
          justify="center"
          className={classes.gridContainer}
        >
          {this.state.projects.map((project) => (
            <Grid item xs={12} sm={6} md={4}>
              <ProjectThumbnail
                title={project.title}
                category={project.category}
                link={project.link}
                image={project.image}
              />
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(Projects);
