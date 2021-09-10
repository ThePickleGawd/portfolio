// React
import { useState } from "react";

// Redux
import { useSelector } from "react-redux";
import * as TYPES from "../../redux/types";

// Material UI
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const SongControls = () => {
  const sound = useSelector((state) => state.music.sound);
  const [position, setPosition] = useState(0);

  /*
  Position = current/total * 100
  Current = newPos/total /100 #idk yet
  */

  const updatePosition = () => {
    if (sound && sound.playing())
      setPosition((sound.seek() / sound.duration()) * 100);
    else setPosition(0);
  };

  const updateInterval = setInterval(updatePosition, 1000);
  clearInterval(updateInterval);

  return (
    <Card
      style={{
        display: "flex",
        position: "fixed",
        justifyContent: "center",
        bottom: 0,
        width: "100%",
        height: 50,
      }}
      raised
    >
      <LinearProgress
        value={position}
        variant="determinate"
        style={{ position: "absolute", width: "100%" }}
      />
      <IconButton>
        <SkipPreviousIcon />
      </IconButton>
      <IconButton>
        <PlayArrowIcon />
      </IconButton>
      <IconButton>
        <SkipNextIcon />
      </IconButton>
    </Card>
  );
};

export default SongControls;
