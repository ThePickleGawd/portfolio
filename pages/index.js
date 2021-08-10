// React
import { useRef, useEffect } from "react";
import router, { useRouter } from "next/router";
import Image from "next/image";

// Material UI
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Badge from "@material-ui/core/Badge";
import Card from "@material-ui/core/Card";

// Springy
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

// Portfolio
import About from "../components/About";
import profilePic from "../public/me.jpg";
import { useHashCheck } from "../util/helper";

export const Home = () => {
  const parallaxRef = useRef();

  const hashCheck = useHashCheck(parallaxRef);

  return (
    <Parallax pages={3} style={{ top: "0", left: "0" }} ref={parallaxRef}>
      <ParallaxLayer
        offset={0}
        speed={2.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h3">{"Hi, I'm Dylan"}</Typography>
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
        offset={1.1}
        speed={1}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <About />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;
