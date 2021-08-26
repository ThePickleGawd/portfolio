// React
import { useRouter } from "next/router";
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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Typography variant="h2">{projects[projectID].title}</Typography>
    </div>
  );
};

export default Project;
