// Material UI
import Fade from "@material-ui/core/Fade";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import GitHub from "@material-ui/icons/GitHub";
import Instagram from "@material-ui/icons/Instagram";
import Facebook from "@material-ui/icons/Facebook";
import LinkedIn from "@material-ui/icons/LinkedIn";

const SocialMedia = [
  {
    name: "GitHub",
    Icon: GitHub,
    link: "https://github.com",
  },
  {
    name: "Instagram",
    Icon: Instagram,
    link: "https://instagram.com",
  },
  {
    name: "Facebook",
    Icon: Facebook,
    link: "https://facebook.com",
  },
  {
    name: "LinkedIn",
    Icon: LinkedIn,
    link: "https://linkedin.com",
  },
];

const Welcome = () => {
  return (
    <>
      <Fade in={true} timeout={3000}>
        <Typography variant="h3">{"Hi, I'm Dylan"}</Typography>
      </Fade>
      <Fade in={true} timeout={10000}>
        <Typography variant="h4">
          {"React developer, Unity game developer"}
        </Typography>
      </Fade>
      <div>
        {SocialMedia.map((x) => {
          return (
            <IconButton size="large" key={x.name}>
              <x.Icon />
            </IconButton>
          );
        })}
      </div>
    </>
  );
};

export default Welcome;
