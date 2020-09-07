// React
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import clsx from "clsx";

// MUI & Theme
import theme from "../Util/theme";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

// Icons
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const styles = {
  ...theme.spreadIt,
  root: {},
  link: { textDecoration: "none", color: "black" },
  projectImage: {},
  title: { paddingBottom: "0px" },
  category: {},
  description: {},
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
};

const ProjectThumbnail = (props) => {
  const { classes } = props;
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <Link to={props.link} className={classes.link}>
        <CardActionArea>
          <CardMedia
            component="img"
            image={require("../Images/testImage2.JPG")}
            className={classes.projectImage}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h4"
              component="h2"
              className={classes.title}
            >
              {props.title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <Typography
        variant="h6"
        color="textPrimary"
        componenet="p"
        className={classes.category}
      >
        {props.category}
      </Typography>
      <CardActions>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpand}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}
          >
            {props.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

ProjectThumbnail.propTypes = {
  classes: PropTypes.object.isRequired,
  tite: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default withStyles(styles)(ProjectThumbnail);
