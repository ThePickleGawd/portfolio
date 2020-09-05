// React
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

// MUI & Theme
import theme from "../Util/theme";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const styles = {
  ...theme.spreadIt,
  root: {
    minWidth: 520,
    minHeight: 400,
  },
  projectImage: {},
  title: {
    textAlign: "left",
  },
  category: {},
};

const ProjectThumbnail = (props) => {
  const { classes } = props;
  return (
    <Card className={classes.root}>
      <Link to={props.link}>
        <CardActionArea>
          <CardMedia
            component="img"
            src="../Images/testImage1.JPG"
            className={classes.projectImage}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="h2"
              className={classes.title}
            >
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div className={classes.category}>{props.category}</div>
      </Link>
    </Card>
  );
};

ProjectThumbnail.propTypes = {
  classes: PropTypes.object.isRequired,
  tite: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectThumbnail);
