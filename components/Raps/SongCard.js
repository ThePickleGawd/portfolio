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

const SongCard = ({ title, description, img, embedId, mp3 }) => {
  // State vars
  const [playing, setPlaying] = useState(false);
  const [play, exposedData] = useSound(mp3, {
    onplay: () => setPlaying(true),
    onend: () => setPlaying(false),
    onpause: () => setPlaying(false),
  });

  // Reduxy stuff
  const dispatch = useDispatch();
  const currentSound = useSelector((state) => state.music.sound);

  const handlePlay = () => {
    // If the redux sound is not this one, stop it (its a new song)
    if (currentSound && currentSound != exposedData.sound) currentSound.stop();
    play();
    dispatch({ type: TYPES.SET_SOUND_REF, payload: exposedData.sound });
  };

  const handlePause = () => exposedData.pause();

  return (
    <Grid item xs={12} sm={12} md={6}>
      <Card style={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2" noWrap>
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" color="primary">
              {"Watch on Youtube"}
            </Button>
            <IconButton size="small">
              <GetAppIcon />
            </IconButton>
            <IconButton
              size="small"
              onClick={playing ? handlePause : handlePlay}
              disabled={!mp3}
            >
              {playing ? <Pause /> : <PlayArrow />}
            </IconButton>
            <IconButton size="small">
              <QueueMusic />
            </IconButton>
          </CardActions>
        </div>
        <div
          style={{
            position: "relative",
            flex: 1,
          }}
        >
          {img && (
            <Image src={img} alt="img" layout="fill" objectFit="contain" />
          )}
        </div>
      </Card>
    </Grid>
  );
};

SongCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  img: PropTypes.any,
  embedId: PropTypes.string,
  mp3: PropTypes.any,
};

export default SongCard;

/*
Grid (spotify):
xs = album, date gone
md = date gone
> = everything

Each song is a grid
*/
