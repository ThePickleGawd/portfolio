import Image from "next/image";

import { ParallaxLayer } from "@react-spring/parallax";

// Pictures
import unityLogo from "../public/unity.png";
import reactLogo from "../public/react.png";
import nextLogo from "../public/next.png";
import cppLogo from "../public/cpp.png";
import test from "../public/stars.svg";

const ParallaxBackground = () => {
  return (
    <>
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
          <Image src={unityLogo} alt="Unity Logo" priority />
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
          <Image src={cppLogo} alt="CPP Logo" priority />
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
          <Image src={reactLogo} alt="React Logo" priority />
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
          <Image src={nextLogo} alt="Next.js Logo" priority />
        </div>
      </ParallaxLayer>
    </>
  );
};

export default ParallaxBackground;
