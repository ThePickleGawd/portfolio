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
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Components
import Welcome from "./Welcome";
import About from "./About";
import Skills from "./Skills";
import AboutImage from "./AboutImage";
import Work from "./Work";
import Contact from "./Contact";
import Sidebar from "./Sidebar";
import ParallaxBackground from "./ParallaxBackground";

const MobileHome = () => {
  return (
    <>
      {/*<Sidebar parallaxRef={parallaxRef} />*/}
      <Parallax pages={4} style={{ top: "0", left: "0", zIndex: -1 }}>
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
          <Welcome />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <AboutImage fadeIn={true} />
          <br />
          <About />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <div style={{ width: "50px" }} />
          <Skills />
          <div style={{ width: "50px" }} />
        </ParallaxLayer>
        {/* <ParallaxLayer
          sticky={{ start: 3, end: 3.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Work />
        </ParallaxLayer> */}
        <ParallaxLayer
          offset={3}
          speed={2.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Contact />
        </ParallaxLayer>
      </Parallax>
    </>
  );
};

export default MobileHome;
