// Material UI
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";

// Icons
import GitHubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";

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
      <TextField label="Name" fullWidth />
      <TextField label="Email" fullWidth />
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
        <Button>Send!</Button>
      </div>
    </div>
  );
};

export default Contact;
