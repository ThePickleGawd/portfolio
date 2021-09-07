// React
import Image from "next/image";
import { useEffect, useRef } from "react";

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
import useSound from "use-sound";

// Image
import rollie from "../public/rollie.jpeg";

// Audio
import { raps } from "../info/rapsInfo";

export const RapsPage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography variant="h2">{"Dylan's Raps"}</Typography>
      <br />
      <Container>
        <Grid container spacing={3}>
          {raps.map((proj) => (
            <SongCard
              key={proj.title}
              title={proj.title}
              description={proj.description}
              embedId={proj.embedId}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RapsPage;
