// React
import React, { useRef, useEffect, useState } from "react";
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
import Splashscreen from "components/New Home/Splashscreen";
import Welcome from "components/New Home/Welcome";
import ParallaxBackground from "components/Home/ParallaxBackground";
import ComputerSkills from "./ComputerSkills";
import Transitions from "./Transitions";
import { Container } from "@mui/material";

export const Home = () => {
  const containerRef = useRef<HTMLDivElement>();
  const [splashed, setSplashed] = useState(false);

  return (
    <>
      <Splashscreen onComplete={() => setSplashed(true)} />
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "5000vh",
          top: "0",
          left: "0",
          zIndex: -1,
        }}
        ref={containerRef}
        hidden={!containerRef}
      >
        <div
          style={{
            paddingTop: 50,
            paddingLeft: 50,
            position: "fixed",
            height: "100vh",
            width: "100wh",
            top: 0,
          }}
        >
          <Welcome splashed={splashed} container={containerRef.current} />
        </div>
        <div
          style={{
            paddingTop: 50,
            paddingLeft: 50,
            paddingRight: 50,
            position: "fixed",
            top: 0,
          }}
        >
          <ComputerSkills container={containerRef.current} />
        </div>
      </div>
    </>
  );
};

export default Home;
