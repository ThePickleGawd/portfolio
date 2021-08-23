// React
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useOnScreen } from "../util/helper";

// Material UI
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import IconButton from "@material-ui/core/IconButton";

import { projects } from "../info/projects";

const ProjectViewer = () => {
  const [project, setProject] = useState(0);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingRight: 10,
          }}
        >
          <IconButton>
            <NavigateBeforeIcon />
          </IconButton>
        </div>
        <Image src={projects[0]} alt="test" />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 10,
          }}
        >
          <IconButton>
            <NavigateNextIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export const Work = (props) => {
  const ref = useRef();
  const visible = useOnScreen(ref);

  return (
    <div
      style={{
        width: "50%",
        height: "70%",
      }}
      ref={ref}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Fade in={visible} timeout={3000}>
          <Typography variant="h2" style={{ marginTop: 15 }}>
            {"Work"}
          </Typography>
        </Fade>
      </div>
      <br />
      <ProjectViewer />
    </div>
  );
};

export default Work;