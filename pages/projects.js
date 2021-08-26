// React
import { useRouter } from "next/router";
import { useEffect } from "react";

const Projects = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/#work");
  }, []);

  return null;
};

export default Projects;
