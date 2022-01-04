// React
import React from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

// MUI
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Fade from "@mui/material/Fade";

// React Spring
import { IParallax } from "@react-spring/parallax";

// Components
import { useScrollCheck } from "util/helper";

const ComputerSkills: React.FC<{ parallax: IParallax }> = ({ parallax }) => {
  const open = useScrollCheck({ parallax: parallax, start: 1800, end: 2400 });

  return (
    <Grid container spacing={10}>
      <Grid item xs={12}>
        <Fade in={open} timeout={1000}>
          <Typography variant="h2" align="center">
            {"Computer Skills"}
          </Typography>
        </Fade>
      </Grid>
      <Grid item xs={12} md={4}>
        <Fade in={open} timeout={1000}>
          <Typography variant="h4">{"Coding"}</Typography>
        </Fade>
      </Grid>
      <Grid item xs={12} md={4}>
        <Fade in={open} timeout={1000}>
          <Typography variant="h4">{"Media"}</Typography>
        </Fade>
      </Grid>
      <Grid item xs={12} md={4}>
        <Fade in={open} timeout={1000}>
          <Typography variant="h4">{"Engineering"}</Typography>
        </Fade>
      </Grid>
    </Grid>
  );
};

export default ComputerSkills;
