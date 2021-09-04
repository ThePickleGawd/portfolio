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

// Image
import rollie from "../public/rollie.jpeg";

// MP3

const tmp_raps = [
  {
    title: "Rollies for the Homies",
    description: "Hi",
    img: null,
    youtube: "https://youtube.com",
  },
  {
    title: "Ran up With a Glock",
    description: "Hi",
    img: null,
    youtube: "https://youtube.com",
  },
];

export const RapsPage = () => {
  const SongCard = ({ title, description, img, youtube, mp3 }) => (
    <Grid item xs={12} sm={4} md={3}>
      <Card>
        <CardActionArea>
          <CardMedia
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Image src={rollie} alt="test" objectFit="contain" priority />
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Watch on Youtube
          </Button>
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
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RapsPage;
