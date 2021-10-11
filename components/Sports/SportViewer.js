// React
import { useRef, useState } from "react";

// Material UI
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FolderIcon from "@mui/icons-material/Folder";

// Components
import SportsFolder from "./SportsFolder";
import SportsItem from "./SportsItem";
import ReactPlayer from "react-player";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const SportViewer = ({ title, scrollNext }) => {
  const [video, setVideo] = useState("");

  return (
    <Container>
      <Card>
        <Typography variant="h2" align="center">
          {title}
        </Typography>
        <br />
        <Grid container>
          <Grid item lg={7}>
            <ReactPlayer
              url={"/video/football/LosAltos-Kickoff.mp4"}
              controls
              height="100%"
              width="100%"
            />
          </Grid>
          <Grid item lg={4} xs={12}>
            <List>
              <SportsFolder />
            </List>
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
            lg={1}
          >
            <Button onClick={scrollNext}>
              <ArrowForwardIosIcon />
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default SportViewer;
