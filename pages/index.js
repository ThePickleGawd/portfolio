// React
import { useRef, useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import Image from "next/image";

// UI Design
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import Fade from "@material-ui/core/Fade";

// Springy
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Components
import About from "../components/About";
import Work from "../components/Work";
import Contact from "../components/Contact";
import ParallaxBackground from "../components/ParallaxBackground";
import { useOnScreen, useHashCheck } from "../util/helper";
import useMediaQuery from "@material-ui/core/useMediaQuery";

// Pictures
import profilePic from "../public/me.jpg";

export const Home = () => {
  const parallaxRef = useRef();

  // don't remove this, it checks hashes even though var is unused
  const hashCheck = useHashCheck(parallaxRef);
  const smallScreen = useMediaQuery("(max-width:1000px)");

  if (smallScreen) return <div>Sorry, small screen not supported yet...</div>;

  return (
    <Parallax pages={5} style={{ top: "0", left: "0" }} ref={parallaxRef}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Fade in={true} timeout={3000}>
          <Typography variant="h3">{"Hi, I'm Dylan"}</Typography>
        </Fade>
        <Fade in={true} timeout={10000}>
          <Typography variant="h4">
            {"React developer, Unity game developer"}
          </Typography>
        </Fade>
        <Fade in={true} timeout={10000}>
          <Typography variant="h5">{"(site still in-progress)"}</Typography>
        </Fade>
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 1, end: 3 }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
        }}
      >
        <Avatar
          alt="Dylan Lu"
          style={{ width: 400, height: 400, marginRight: "15%" }}
        >
          <Image src={profilePic} alt="Dylan Lu" width={400} height={400} />
        </Avatar>
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 1, end: 1.5 }}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <About />
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 2.5, end: 3 }}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <Work />
      </ParallaxLayer>
      <ParallaxLayer
        offset={4}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Contact />
      </ParallaxLayer>
      <ParallaxBackground />
    </Parallax>
  );
};

export default Home;
