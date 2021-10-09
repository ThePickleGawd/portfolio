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
import Welcome from "../components/Home/Welcome";
import About from "../components/Home/About";
import Skills from "../components/Home/Skills";
import AboutImage from "../components/Home/AboutImage";
import Work from "../components/Home/Work";
import Contact from "../components/Home/Contact";
import Sidebar from "../components/Home/Sidebar";
import ParallaxBackground from "../components/Home/ParallaxBackground";
import { HashCheckProvider } from "../util/helper";
import useMediaQuery from "@mui/material/useMediaQuery";

export const Home = () => {
  const parallaxRef = useRef();
  const smallScreen = useMediaQuery("(max-width:1000px)");
  const router = useRouter();

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const locations = {
      about: 1,
      work: 2.5,
      contact: 4,
    };

    if (!locations[hash]) return;
    parallaxRef.current.scrollTo(locations[hash]);
  }, []);

  if (smallScreen) return <div>Sorry, small screen not supported yet...</div>;

  return (
    <>
      {/*<Sidebar parallaxRef={parallaxRef} />*/}
      <Parallax
        pages={4}
        style={{ top: "0", left: "0", zIndex: -1 }}
        ref={parallaxRef}
      >
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
          sticky={{ start: 1, end: 2 }}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            zIndex: -1,
          }}
        >
          <AboutImage />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "10%",
          }}
        >
          <About />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.9}
          speed={1}
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "10%",
          }}
        >
          <Skills />
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
        <ParallaxBackground />
      </Parallax>
    </>
  );
};

export default Home;
