// Material UI
import Fade from "@mui/material/Fade";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHub from "@mui/icons-material/GitHub";
import Instagram from "@mui/icons-material/Instagram";
import Facebook from "@mui/icons-material/Facebook";
import LinkedIn from "@mui/icons-material/LinkedIn";

const SocialMedia = [
  {
    name: "GitHub",
    Icon: GitHub,
    link: "https://github.com/ThePickleGawd",
  },
  {
    name: "Instagram",
    Icon: Instagram,
    link: "https://www.instagram.com/_dylan_lu/",
  },
  {
    name: "Facebook",
    Icon: Facebook,
    link: "https://www.facebook.com/dylan.lu.982",
  },
  {
    name: "LinkedIn",
    Icon: LinkedIn,
    link: "https://www.linkedin.com/in/dylanelu/",
  },
];

const Welcome = () => {
  return (
    <>
      <Fade in={true} timeout={3000}>
        <Typography variant="h3">
          {"Hi, I'm "} <span style={{ color: "#f53b3b" }}>{"Dylan"}</span>
        </Typography>
      </Fade>
      <Fade in={true} timeout={10000}>
        <Typography variant="h4">
          <span style={{ color: "#79D8F7" }}>{"React "}</span>
          {"developer, "}
          <span
            style={{
              color: "black",
              WebkitTextStrokeColor: "white",
              WebkitTextStrokeWidth: 0.7,
            }}
          >
            {"Unity "}
          </span>
          {"game developer"}
        </Typography>
      </Fade>
      <Fade in={true} timeout={10000}>
        <div>
          {SocialMedia.map((x) => {
            return (
              <IconButton
                size="large"
                key={x.name}
                href={x.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <x.Icon />
              </IconButton>
            );
          })}
        </div>
      </Fade>
    </>
  );
};

export default Welcome;
