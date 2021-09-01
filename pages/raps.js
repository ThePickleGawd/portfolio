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
import Test from "../public/projectImages/test.png";
import { tmp_projects } from "../info/projects";

// MP3

const tmp_raps = [
  {
    name: "Rollies for the Homies",
    img: null,
    youtube: "https://youtube.com",
  },
];

export const RapsPage = () => {
  const SongCard = () => (
    <Grid item xs={12} sm={6} md={4}>
      <Card>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              Lizard
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button color="primary">Share</Button>
          <Button size="small" color="primary">
            Learn More
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
          {tmp_projects.map((proj) => (
            <SongCard key={proj.name} />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default RapsPage;
