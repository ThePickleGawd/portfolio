// React
import { useEffect, useState, useRef } from "react";

// Redux
import { useAppSelector, useAppDispatch } from "redux/hooks";
import * as TYPES from "redux/types";

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

/*

We need someway to access each song cards individual howler instance

When we hit play:
  - If no song is playing, play raps[0]
  - Otherwise, toggle

*/

const SongControls = () => {
  const dispatch = useAppDispatch();

  const sound = useAppSelector((state) => state.music.sound);
  const raps = useAppSelector((state) => state.music.raps);
  const currentRapId = useAppSelector((state) => state.music.currentRapId);

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

  const skipNext = () => skip("next");

  const skipPrev = () => skip("prev");

  const skip = (direction) => {
    if (sound) sound.stop();

    // Get next index
    let nextIndex = 0;
    if (direction === "next")
      nextIndex = currentRapId + 1 >= raps.length ? 0 : currentRapId + 1;
    if (direction === "prev")
      nextIndex = currentRapId - 1 < 0 ? raps.length - 1 : currentRapId - 1;

    while (raps[nextIndex].sound == null) {
      // Return if we loop all the way back, to avoid infinite recursion?
      if (nextIndex === currentRapId) return;

      if (direction === "next" && nextIndex + 1 >= raps.length) nextIndex = 0;
      else if (direction === "next") nextIndex++;
      else if (direction === "prev" && nextIndex - 1 < 0)
        nextIndex = raps.length - 1;
      else if (direction === "prev") nextIndex--;
    }

    // Dispatch it
    const nextSound = raps[nextIndex].sound;

    dispatch({ type: TYPES.SET_SOUND_REF, payload: nextSound });
    dispatch({ type: TYPES.SET_RAP_ID, payload: nextIndex });

    nextSound.play();
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
        <IconButton onClick={skipPrev} size="large">
          <SkipPreviousIcon />
        </IconButton>
        <IconButton onClick={togglePlay} size="large">
          {sound && sound.playing() ? <Pause /> : <PlayArrowIcon />}
        </IconButton>
        <IconButton onClick={skipNext} size="large">
          <SkipNextIcon />
        </IconButton>
      </div>
    </Card>
  );
};

export default SongControls;
