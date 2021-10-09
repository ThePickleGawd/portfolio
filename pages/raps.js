// React
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Material UI
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import CircularProgress from "@mui/material/CircularProgress";

// Components
import ReactPlayer from "react-player";
import { YoutubeEmbed } from "../util/helper";
import SongCard from "../components/Raps/SongCard";
import SongControls from "../components/Raps/SongControls";
import SortButton from "../components/Raps/SortButton";
import RapsList from "../components/Raps/RapsList";
import useSound from "use-sound";

// Redux
import { useDispatch, useSelector } from "react-redux";
import * as TYPES from "../redux/types";

// Image
import rollie from "../public/rollie.jpeg";

export const RapsPage = () => {
  const dispatch = useDispatch();
  const rapId = useSelector((state) => state.music.currentRapId);
  const sound = useSelector((state) => state.music.sound);
  const [loading, setLoading] = useState(true);

  // Code-splitting for large raps file
  useEffect(() => {
    import("../info/rapsInfo").then((mod) => {
      dispatch({ type: TYPES.SET_RAPS, payload: mod.default });
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
      <Typography variant="h2">
        {"Dylan's Raps (Not fully working yet)"}
      </Typography>
      <br />
      <Container>
        <div style={{}}>
          <SortButton />
        </div>
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
          <RapsList />
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
