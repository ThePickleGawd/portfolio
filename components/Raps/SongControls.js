// Material UI
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import IconButton from "@material-ui/core/IconButton";
import LinearProgress from "@material-ui/core/LinearProgress";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";

const SongControls = () => {
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
        value={50}
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
