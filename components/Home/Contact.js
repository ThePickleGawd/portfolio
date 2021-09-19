// Material UI
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";

// Icons
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        marginTop: "10%",
      }}
    >
      <Typography variant="h2" align="center">
        Contact Me
      </Typography>
      <TextField label="Name" fullWidth variant="standard" />
      <TextField label="Email" fullWidth variant="standard" />
      <br />
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "center",
          marginTop: 10,
        }}
      >
        <Button>Send! (Not working)</Button>
      </div>
    </div>
  );
};

export default Contact;
