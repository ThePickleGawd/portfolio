// React
import PropTypes from "prop-types";
import Image from "next/image";

// Redux
import { useDispatch, useSelector } from "react-redux";
import * as TYPES from "../../redux/types";

// Music
import useSound from "use-sound";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import GetAppIcon from "@material-ui/icons/GetApp";
import PlayArrow from "@material-ui/icons/PlayArrow";
import QueueMusic from "@material-ui/icons/QueueMusic";

const SongCard = ({ title, description, img, embedId, mp3 }) => {
  const [play, exposedData] = useSound(mp3);
  const dispatch = useDispatch();
  const currentSound = useSelector((state) => state.music.sound);

  const handlePlay = () => {
    if (currentSound) currentSound.stop();
    play();
    dispatch({ type: TYPES.SET_SOUND_REF, payload: exposedData.sound });
  };

  return (
    <Grid item xs={12} sm={4} md={3}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" noWrap>
            {title}
          </Typography>
          {/* <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography> */}
          {/*img && <Image src={img} alt="img" />*/}
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            {"Watch on Youtube"}
          </Button>
          <IconButton size="small">
            <GetAppIcon />
          </IconButton>
          <IconButton size="small" onClick={handlePlay} disabled={!mp3}>
            <PlayArrow />
          </IconButton>
          <IconButton size="small">
            <QueueMusic />
          </IconButton>
        </CardActions>
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
