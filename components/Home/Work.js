// React
import React, { useRef, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useOnScreen } from "../../util/helper";

// Material UI
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import IconButton from "@mui/material/IconButton";

import { projects } from "../../data/projects/projectsData";

const ProjectViewer = () => {
  const [project, setProject] = useState(0);
  const router = useRouter();

  // Projects is an object, which we access keys through this variable
  // Do this cuz we wanna access it like an array
  const projectKeys = Object.keys(projects);
  const currentProject = () => projects[projectKeys[project]];

  const handleNextProject = () => {
    if (project + 1 >= projectKeys.length) setProject(0);
    else setProject((p) => p + 1);
  };

  const handlePreviousProject = () => {
    if (project - 1 < 0) setProject(projectKeys.length - 1);
    else setProject((p) => p - 1);
  };

  const handleProjectClicked = () => {
    router.push(`/projects/${projectKeys[project]}`);
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
          <IconButton onClick={handlePreviousProject} size="large">
            <NavigateBeforeIcon />
          </IconButton>
        </div>
        <Button
          style={{ position: "relative", width: 500, height: 500 }}
          onClick={handleProjectClicked}
          disableRipple
        >
          {currentProject().image != undefined && (
            <Image
              src={currentProject().image}
              alt="Current Project"
              layout="fill"
              objectFit="contain"
              priority
            />
          )}
          {currentProject().previewTitle != undefined && (
            <div
              style={{
                position: "absolute",
                backgroundColor: "rgba(200,200,200,0.6)",
              }}
            >
              <Typography variant="h2" style={{ opacity: 1 }}>
                {currentProject().previewTitle}
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
          <IconButton onClick={handleNextProject} size="large">
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
