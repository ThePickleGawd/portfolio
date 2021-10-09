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
        raps.map((song) => (
          <SongCard
            key={song.title}
            title={song.title}
            description={song.description}
            embedId={song.embedId}
            img={song.img}
            mp3={song.mp3}
            fire={song.fire}
          />
        ))}
    </Grid>
  );
};

export default RapsList;
