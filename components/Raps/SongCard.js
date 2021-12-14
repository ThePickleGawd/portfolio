// React
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Image from "next/image";

// Redux
import { useDispatch, useSelector } from "react-redux";
import * as TYPES from "../../redux/types";

// Music
import useSound from "use-sound";

// Material UI
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import GetAppIcon from "@mui/icons-material/GetApp";
import PlayArrow from "@mui/icons-material/PlayArrow";
import Pause from "@mui/icons-material/Pause";
import QueueMusic from "@mui/icons-material/QueueMusic";
import FireIcon from "@mui/icons-material/LocalFireDepartment";

// Components
import FireRating from "./FireRating";
import LyricsViewer from "./LyricsViewer";
import MeaningViewer from "./MeaningViewer";
import dayjs from "dayjs";
import { Tooltip } from "@mui/material";

const SongCard = ({
  song: { title, description, img, embedId, mp3, fire, date, lyrics, meaning },
  index,
}) => {
  // State vars
  const [playing, setPlaying] = useState(false);
  const [lyricsOpen, setLyricsOpen] = useState(false);
  const [meaningOpen, setMeaningOpen] = useState(false);
  const [play, exposedData] = useSound(mp3, {
    onplay: () => setPlaying(true),
    onend: () => setPlaying(false),
    onpause: () => setPlaying(false),
    onstop: () => setPlaying(false),
    onplayerror: () => setPlaying(false),
  });

  // Reduxy stuff
  const dispatch = useDispatch();
  const sound = useSelector((state) => state.music.sound);

  useEffect(() => {
    if (!exposedData.sound) return;
    dispatch({
      type: TYPES.ADD_SOUND_REF,
      payload: { title, sound: exposedData.sound },
    });
  }, [exposedData.sound]);

  const handlePlay = () => {
    // If the redux sound is not this one, stop it (its a new song)
    if (sound && sound != exposedData.sound) sound.stop();
    play();
    dispatch({ type: TYPES.SET_SOUND_REF, payload: exposedData.sound });
    console.log("setting", index);
    dispatch({ type: TYPES.SET_RAP_ID, payload: index });
  };

  const handlePause = () => exposedData.pause();
  // TODO: DATE
  return (
    <>
      {lyrics && (
        <LyricsViewer
          opened={lyricsOpen}
          lyrics={lyrics}
          meaningArray={meaning}
          title={title}
          onClose={() => setLyricsOpen(false)}
        />
      )}
      {meaning && (
        <MeaningViewer
          opened={meaningOpen}
          meaningArray={meaning}
          onClose={() => setMeaningOpen(false)}
        />
      )}
      <Grid item xs={12} sm={12} md={6}>
        <Card style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2" noWrap>
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {`${description} (${dayjs(date).format("MMM D, YYYY")})`}
              </Typography>
            </CardContent>
            <CardActions>
              <Tooltip
                title={
                  !mp3 ? "This songs so bad I can't let anyone hear it" : ""
                }
              >
                <IconButton
                  size="small"
                  onClick={playing ? handlePause : handlePlay}
                  disabled={!mp3}
                >
                  {playing ? <Pause /> : <PlayArrow />}
                </IconButton>
              </Tooltip>
              <IconButton size="small" href={mp3}>
                <GetAppIcon />
              </IconButton>
              <Button
                size="small"
                color="primary"
                onClick={() => setLyricsOpen(true)}
                disabled={!lyrics}
              >
                {"Lyrics"}
              </Button>
              <Button
                size="small"
                color="primary"
                onClick={() => setMeaningOpen(true)}
                disabled={!lyrics}
              >
                {"Meaning"}
              </Button>
              <Button size="small" color="primary" disabled>
                {"Youtube"}
              </Button>
              <IconButton size="small" disabled>
                <FireRating fire={fire} />
              </IconButton>
            </CardActions>
          </div>
          {/* <div
          style={{
            position: "relative",
            flex: 1,
          }}
        >
          {img && (
            <Image src={img} alt="img" layout="fill" objectFit="contain" />
          )}
        </div> */}
        </Card>
      </Grid>
    </>
  );
};

SongCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.any,
  embedId: PropTypes.string,
  mp3: PropTypes.any,
  fire: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

export default SongCard;

/*
Grid (spotify):
xs = album, date gone
md = date gone
> = everything

Each song is a grid
*/
