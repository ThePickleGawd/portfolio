// React
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Material UI
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";

// Components
import ReactPlayer from "react-player";
import { YoutubeEmbed } from "../util/helper";
import SongCard from "../components/Raps/SongCard";
import SongControls from "../components/Raps/SongControls";
import useSound from "use-sound";

// Redux
import { useDispatch, useSelector } from "react-redux";

// Image
import rollie from "../public/rollie.jpeg";

export const RapsPage = () => {
  const rapId = useSelector((state) => state.music.currentRapId);
  const sound = useSelector((state) => state.music.sound);
  const [raps, setRaps] = useState([]);
  const [loading, setLoading] = useState(true);

  // Code-splitting for large raps file
  useEffect(() => {
    import("../info/rapsInfo").then((mod) => {
      setRaps(mod.default);
      setLoading(false);
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">{"Dylan's Raps (Not working yet)"}</Typography>
      <br />
      <Container>
        {loading ? (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <CircularProgress />
          </div>
        ) : (
          <Grid container spacing={3}>
            {raps.map((song) => (
              <SongCard
                key={song.title}
                title={song.title}
                description={song.description}
                embedId={song.embedId}
                img={song.img}
                mp3={song.mp3}
              />
            ))}
          </Grid>
        )}
      </Container>
      {!loading && <SongControls />}
    </div>
  );
};

export default RapsPage;

/*
Notes
- useSound is extension of Howler.js
- Has seek(sec, id) function which goes to position on song id
- Each card has a useSound in it? or global useSound with song switching
*/
