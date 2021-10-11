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
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FolderIcon from "@mui/icons-material/Folder";

// Components
import SportsFolder from "./SportsFolder";
import SportsItem from "./SportsItem";
import ReactPlayer from "react-player";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const SportViewer = ({ title, scrollNext, scrollPrev, data }) => {
  const [video, setVideo] = useState("/video/football/LosAltos-Kickoff.mp4");

  const setVideoByName = (name) => setVideo(`/video/football/${name}`);

  return (
    <Container>
      <Card>
        <Typography variant="h2" align="center">
          {title}
        </Typography>
        <br />
        <Grid container>
          <Grid item xs={12}>
            <ReactPlayer url={video} controls height="100%" width="100%" />
          </Grid>
          <Grid
            item
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignContent: "center",
            }}
            xs={1}
          >
            <Button onClick={scrollPrev} style={{ height: "100%" }}>
              <ArrowBackIosIcon />
            </Button>
          </Grid>
          <Grid item xs={10}>
            <List style={{ overflowY: "scroll" }}>
              {data.map((obj) => {
                return (
                  <SportsFolder
                    files={obj.files}
                    name={obj.name}
                    key={obj.name}
                    setVideo={setVideoByName}
                  />
                );
              })}
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
            xs={1}
          >
            <Button onClick={scrollNext} style={{ height: "100%" }}>
              <ArrowForwardIosIcon />
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Container>
  );
};

export default SportViewer;
