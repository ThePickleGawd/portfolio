// React
import { useEffect, useState, useRef } from "react";

// Redux
import { useSelector } from "react-redux";
import * as TYPES from "../../redux/types";

// Material UI
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import IconButton from "@mui/material/IconButton";
import Slider from "@mui/material/Slider";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import Stack from "@mui/material/Stack";

// Util
import dayjs from "dayjs";

const SongControls = () => {
  const sound = useSelector((state) => state.music.sound);
  const [position, setPosition] = useState(0);
  const [sliding, setSliding] = useState(false);

  /*
  Position = current/total * 100
  Current = newPos/total /100 #idk yet
  */

  useEffect(() => {
    const updatePosition = () => {
      if (!sound || sliding) return;
      setPosition(sound.seek());
    };
    const updateInterval = setInterval(updatePosition, 1000);
    return () => clearInterval(updateInterval);
  }, [sound]);

  const handleSliderChange = (e, val) => {
    setPosition(val);
    setSliding(true);
    // todo
  };

  const handleSliderCommitted = (e, val) => {
    setSliding(false);
    setPosition(val);
    if (!sound) return;
    sound.seek(val);
  };

  const togglePlay = () => {
    if (!sound) return;
    if (sound.playing()) sound.pause();
    else sound.play();
  };

  return (
    <Card
      style={{
        display: "flex",
        flexDirection: "column",
        position: "sticky",
        bottom: 0,
        width: "100%",
        minHeight: "8%",
      }}
      raised
    >
      <Stack direction="row" alignItems="center" justifyContent="center">
        <Typography variant="body2" style={{ marginBottom: -40 }}>
          {dayjs.unix(position).format("m:ss")}
        </Typography>
        <Slider
          value={position}
          onChange={handleSliderChange}
          onChangeCommitted={handleSliderCommitted}
          min={0}
          max={sound ? sound.duration() : 100}
          disabled={!sound}
          size="small"
          //valueLabelFormat=
          style={{ width: "60%", cursor: "pointer", alignSelf: "center" }}
        />
        <Typography variant="body2" style={{ marginBottom: -40 }}>
          {sound ? dayjs.unix(sound.duration()).format("m:ss") : "0:00"}
        </Typography>
      </Stack>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <IconButton size="large">
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={togglePlay} size="large">
          {sound && sound.playing() ? <Pause /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton size="large">
          <SkipNextIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default SongControls;
