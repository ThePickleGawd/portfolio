// React
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

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
import GetAppIcon from "@material-ui/icons/GetApp";
import PlayArrow from "@material-ui/icons/PlayArrow";
import QueueMusic from "@material-ui/icons/QueueMusic";

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

// Audio
import { raps } from "../info/rapsInfo";

export const RapsPage = () => {
  const rapId = useSelector((state) => state.music.currentRapId);

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
      </Container>
      <SongControls />
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
