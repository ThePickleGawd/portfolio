// React
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
import GetAppIcon from "@material-ui/icons/GetApp";
import PlayArrow from "@material-ui/icons/PlayArrow";
import QueueMusic from "@material-ui/icons/QueueMusic";

// Components
import { YoutubeEmbed } from "../util/helper";

// Image
import rollie from "../public/rollie.jpeg";

// MP3

const tmp_raps = [
  {
    title: "Rollies for the Homies",
    description: "Hi",
    img: null,
    embedId: "a5eDbFbrxN4",
  },
  {
    title: "Ran up With a Glock",
    description: "Hi",
    img: null,
    embedId: "0-S5a0eXPoc",
  },
  {
    title: "Black Ice on My Drip",
    description: "Hi",
    img: null,
    youtube: "https://youtube.com",
  },
  {
    title: "Saiyan Gawd Flow",
    description: "Hi",
    img: null,
    youtube: "https://youtube.com",
  },
  {
    title: "SAT's and the 223's",
    description: "Hi",
    img: null,
    youtube: "https://youtube.com",
  },
  {
    title: "Dropping an Opp",
    description: "Hi",
    img: null,
    youtube: "https://youtube.com",
  },
];

export const RapsPage = () => {
  const SongCard = ({ title, description, img, embedId, mp3 }) => (
    <Grid item xs={12} sm={4} md={3}>
      <Card>
        <CardMedia
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {embedId ? (
            <YoutubeEmbed embedId={embedId} />
          ) : img ? (
            <Image src={img} alt={title} />
          ) : null}
        </CardMedia>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            Watch on Youtube
          </Button>
          <IconButton size="small">
            <GetAppIcon />
          </IconButton>
          <IconButton size="small">
            <PlayArrow />
          </IconButton>
          <IconButton size="small">
            <QueueMusic />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );

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
          {tmp_raps.map((proj) => (
            <SongCard
              key={proj.name}
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
