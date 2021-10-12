// React
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";

// Material UI
import Typography from "@mui/material/Typography";

// Info
import projects from "../../data/projects/projectsData";

const Project = () => {
  const router = useRouter();
  const { projectID } = router.query;

  useEffect(() => {
    if (projectID && !projects[projectID]) router.push("/#work");
  }, [projectID]);

  if (!projectID || (projectID && !projects[projectID])) return <div />;

  return (
    <div>
      <Typography variant="h2" align="center">
        {projects[projectID].title}
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignContent: "center",
          height: "100%",
        }}
      >
        <Image src={projects[projectID].image} alt="Project Image" priority />
        <div
          style={{
            display: "flex",
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">
            TTESTSTESTSETSETSETESTSETESTSETESTESTESTSTES
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Project;
