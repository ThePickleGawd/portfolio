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
  const projectKeys = Object.keys(projects);

  const handleNextProject = () => {
    if (project + 1 >= projectKeys.length) setProject(0);
    else setProject((p) => p + 1);
  };

  const handlePreviousProject = () => {
    if (project - 1 < 0) setProject(projectKeys.length - 1);
    else setProject((p) => p - 1);
  };

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
          <IconButton onClick={handlePreviousProject}>
            <NavigateBeforeIcon />
          </IconButton>
        </div>
        <Button style={{ position: "relative", width: 500, height: 500 }}>
          {projects[projectKeys[project]].image && (
            <Image
              src={projects[projectKeys[project]].image}
              alt="test"
              layout="fill"
              objectFit="contain"
            />
          )}
          {projects[projectKeys[project]].previewTitle && (
            <div
              style={{
                position: "absolute",
                backgroundColor: "rgba(200,200,200,0.6)",
              }}
            >
              <Typography variant="h2" style={{ opacity: 1 }}>
                {projects[projectKeys[project]].previewTitle}
              </Typography>
            </div>
          )}
        </Button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            paddingLeft: 10,
          }}
        >
          <IconButton onClick={handleNextProject}>
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
