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
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

// Components
import Splashscreen from "components/Home/Splashscreen";
import Welcome from "components/New Home/NewWelcome";
import ParallaxBackground from "components/Home/ParallaxBackground";
export const Home = () => {
  const parallaxRef = useRef<IParallax>();
  const [splashed, setSplashed] = useState(false);

  return (
    <>
      <Splashscreen onComplete={() => setSplashed(true)} />
      <Parallax
        pages={4}
        style={{ top: "0", left: "0", zIndex: -1 }}
        ref={parallaxRef}
      >
        <ParallaxLayer offset={0}>
          <Welcome opened={splashed} />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default Home;
