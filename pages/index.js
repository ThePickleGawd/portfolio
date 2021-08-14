// React
import { useRef, useEffect, useState } from "react";
import router, { useRouter } from "next/router";
import Image from "next/image";

// Material UI
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";
import Fade from "@material-ui/core/Fade";

// Springy
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Components
import About from "../components/About";
import { useOnScreen, useHashCheck } from "../util/helper";

// Pictures
import profilePic from "../public/me.jpg";
import unityLogo from "../public/unity.png";
import reactLogo from "../public/react.png";
import nextLogo from "../public/next.png";
import cppLogo from "../public/cpp.png";
import stars from "../public/stars.png";

export const Home = () => {
  const parallaxRef = useRef();

  const hashCheck = useHashCheck(parallaxRef);

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
      </ParallaxLayer>
      <ParallaxLayer
        sticky={{ start: 1, end: 2 }}
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
        sticky={{ start: 1, end: 1.75 }}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <About />
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={5}
        style={{
          backgroundImage:
            "url(https://awv3node-homepage.surge.sh/build/assets/stars.svg)",
          backgroundSize: "cover",
        }}
      />
      <ParallaxLayer
        offset={0.9}
        speed={1.3}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "center",
        }}
      >
        <div style={{ opacity: 0.3, marginRight: "15%" }}>
          <Image src={unityLogo} alt="Unity Logo" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1}
        speed={0.3}
        style={{
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{ opacity: 0.3, marginLeft: "25%", width: 250, height: 250 }}
        >
          <Image src={cppLogo} alt="CPP Logo" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.6}
        speed={1.3}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
        }}
      >
        <div
          style={{ opacity: 0.3, marginLeft: "5%", width: 250, height: 250 }}
        >
          <Image src={reactLogo} alt="React Logo" />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.7}
        speed={0.6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div style={{ opacity: 0.3 }}>
          <Image src={nextLogo} alt="Next.js Logo" />
        </div>
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;
