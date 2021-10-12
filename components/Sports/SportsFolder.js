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
import SportsItem from "./SportsItem";
import ReactPlayer from "react-player";

const SportsFolder = ({ name, files, setVideo }) => {
  const [opened, setOpened] = useState(false);

  const handleClick = () => {
    setOpened((x) => !x);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          <FolderIcon />
        </ListItemIcon>
        <ListItemText primary={name} secondary={`${files.length} items`} />
      </ListItemButton>
      <Collapse in={opened}>
        {files.map((file) => {
          return (
            <SportsItem
              key={file}
              onClick={() => setVideo(file)}
              file={file}
              star={file === "YrbaBuena-KickoffTD.mp4"}
            />
          );
        })}
      </Collapse>
    </>
  );
};

export default SportsFolder;
