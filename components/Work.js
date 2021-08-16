// React
import React, { useRef } from "react";
import Image from "next/image";
import { useOnScreen } from "../util/helper";

// Material UI
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";

import test from "../public/react.png";

const ProjectViewer = () => {
  return (
    <Card
      style={{
        justifyContent: "center",
        alignContent: "center",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <Typography variant="h3">{"Project Name"}</Typography>
      <div style={{ marginTop: 25 }}>
        <Image src={test} alt="test" objectFit="contain" />
      </div>
    </Card>
  );
};

export const Work = (props) => {
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
