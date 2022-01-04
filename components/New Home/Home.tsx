// React
import { useRef, useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import Image from "next/image";

// UI Design
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Badge from "@mui/material/Badge";
import Card from "@mui/material/Card";
import Fade from "@mui/material/Fade";

// Springy
import {
  IParallax,
  IParallaxLayer,
  Parallax,
  ParallaxLayer,
} from "@react-spring/parallax";

// Components
import Splashscreen from "components/Home/Splashscreen";
import Welcome from "components/New Home/Welcome";
import ParallaxBackground from "components/Home/ParallaxBackground";
import ComputerSkills from "./ComputerSkills";
export const Home = () => {
  const parallaxRef = useRef<IParallax>();
  const [splashed, setSplashed] = useState(false);

  useEffect(() => {
    setInterval(() => console.log(parallaxRef.current.current), 1000);
  }, []);

  return (
    <>
      <Splashscreen onComplete={() => setSplashed(true)} />
      <Parallax
        pages={4}
        style={{ top: "0", left: "0", zIndex: -1 }}
        ref={parallaxRef}
        hidden={!parallaxRef}
      >
        <ParallaxLayer
          sticky={{ start: 0, end: 4 }}
          style={{ paddingTop: 50, paddingLeft: 50 }}
        >
          <Welcome splashed={splashed} parallax={parallaxRef.current} />
        </ParallaxLayer>
        <ParallaxLayer
          sticky={{ start: 0, end: 4 }}
          style={{ paddingTop: 50, paddingLeft: 50, paddingRight: 50 }}
        >
          <ComputerSkills parallax={parallaxRef.current} />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Home;
