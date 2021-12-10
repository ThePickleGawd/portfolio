// React
import { useRef, useState } from "react";

// Material UI
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FolderIcon from "@mui/icons-material/Folder";

import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// Components
import SportsFolder from "./SportsFolder";
import SportsItem from "./SportsItem";
import ReactPlayer from "react-player";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const SportViewer = ({ title, scrollPrev, data }) => {
  const [video, setVideo] = useState("/video/football/YrbaBuena-KickoffTD.mp4");

  const setVideoByName = (name) => setVideo(`/video/football/${name}`);

  return (
    <div>
      <div>
        <ReactPlayer url={video} controls height="100%" width="100%" />
      </div>
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
    </div>
  );
};

export default SportViewer;
