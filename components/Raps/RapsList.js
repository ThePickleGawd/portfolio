// Material UI
import CircularProgress from "@mui/material/CircularProgress";
import Grid from "@mui/material/Grid";

// Components
import SongCard from "./SongCard";

// Redux
import { useSelector } from "react-redux";

const RapsList = () => {
  const raps = useSelector((state) => state.music.raps);

  return (
    <Grid container spacing={3}>
      {raps &&
        raps.map((song, index) => (
          <SongCard key={song.title} song={song} index={index} />
        ))}
    </Grid>
  );
};

export default RapsList;
