// React
import React, { useRef } from "react";
import { useOnScreen } from "../util/helper";

// Material UI
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

const AboutMe = [
  "- I enjoy ___",
  "- I am really good at _____",
  "- I placed ____ in _____",
  "- Im just the best",
];

export const About = (props) => {
  const ref = useRef();
  const visible = useOnScreen(ref);

  return (
    <div
      style={{
        marginLeft: "10%",
        width: "35%",
        height: "70%",
      }}
      ref={ref}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Fade in={visible} timeout={3000}>
          <Typography variant="h2" style={{ marginTop: 15 }}>
            {"About Me"}
          </Typography>
        </Fade>
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
        {React.Children.toArray(
          AboutMe.map((str, index) => {
            // Works because of React.Children.toArray...
            // eslint-disable-next-line
            return <Typography variant="h4">{str}</Typography>;
          })
        )}
      </div>
    </div>
  );
};

export default About;
