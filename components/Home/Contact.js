// React
import { useState } from "react";

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
  const [emailTo, setEmailTo] = useState("dylanelu2@gmail.com");
  const [emailSubject, setEmailSubject] = useState("Wow you're so cool!");
  const [emailBody, setEmailBody] = useState(
    `Hi Dylan, you are so cool, can I hire you?`
  );

  const sendMessage = () => {
    const url =
      "https://mail.google.com/mail?view=cm&tf=0" +
      (emailTo ? "&to=" + emailTo : "") +
      (emailSubject ? "&su=" + emailSubject : "") +
      (emailBody ? "&body=" + emailBody : "");

    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

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
        onChange={(e) => setEmailBody(e.target.value)}
        value={emailBody}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "center",
          marginTop: 10,
        }}
      >
        <Button onClick={sendMessage}>Send! (With gmail)</Button>
      </div>
    </div>
  );
};

export default Contact;
