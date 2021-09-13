// React
import { useEffect, useState, useRef } from "react";

// Redux
import { useSelector } from "react-redux";
import * as TYPES from "../../redux/types";

// Material UI
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import Slider from "@material-ui/core/Slider";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import Pause from "@material-ui/icons/Pause";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";

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
    console.log("committed", val);
    setSliding(false);
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
      <Slider
        value={position}
        onChange={handleSliderChange}
        onChangeCommitted={handleSliderCommitted}
        min={0}
        max={sound ? sound.duration() : 100}
        disabled={!sound}
        //valueLabelFormat=
        style={{ width: "60%", cursor: "pointer", alignSelf: "center" }}
      />
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <IconButton>
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={togglePlay}>
          {sound && sound.playing() ? <Pause /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton>
          <SkipNextIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default SongControls;
