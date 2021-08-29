// React
import { useRouter } from "next/router";
import Image from "next/image";
import { useEffect } from "react";

// Material UI
import Typography from "@material-ui/core/Typography";

// Info
import { projects } from "../../info/projects";

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
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <Image src={projects[projectID].image} alt="Project Image" />
        <Typography variant="body1" align="center">
          TTESTSTESTSETSETSETESTSETESTSETESTESTESTSTES
        </Typography>
      </div>
    </div>
  );
};

export default Project;
