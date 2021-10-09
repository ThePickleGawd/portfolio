import Image from "next/image";

import { ParallaxLayer } from "@react-spring/parallax";

// Pictures
import unityLogo from "../../public/icons/unity.png";
import reactLogo from "../../public/icons/react.png";
import nextLogo from "../../public/icons/next.png";
import cppLogo from "../../public/icons/cpp.png";
import pythonLogo from "../../public/icons/python.png";
import javaLogo from "../../public/icons/java.png";
import javascriptLogo from "../../public/icons/javascript.png";
import typescriptLogo from "../../public/icons/typescript.png";
const stars =
  "https://raw.githubusercontent.com/ThePickleGawd/portfolio/main/public/icons/stars.svg";

const ParallaxBackground = () => {
  return (
    <>
      <ParallaxLayer
        offset={0}
        speed={0}
        factor={4}
        style={{
          backgroundImage: `url(${stars})`,
          backgroundSize: "cover",
          zIndex: -2,
        }}
      />
      <ParallaxLayer
        offset={0.9}
        speed={1.3}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "center",
          zIndex: -2,
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
          zIndex: -2,
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
          zIndex: -2,
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
          zIndex: -2,
        }}
      >
        <div style={{ opacity: 0.3 }}>
          <Image src={nextLogo} alt="Next.js Logo" priority />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2}
        speed={0.2}
        style={{
          display: "flex",
          justifyContent: "flex-start",
          alignContent: "center",
          zIndex: -2,
        }}
      >
        <div
          style={{ opacity: 0.3, width: 250, height: 250, marginLeft: "17%" }}
        >
          <Image src={pythonLogo} alt="Python Logo" priority />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.1}
        speed={0.4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          zIndex: -2,
        }}
      >
        <div
          style={{ opacity: 0.3, width: 250, height: 250, marginLeft: "17%" }}
        >
          <Image src={javaLogo} alt="Java Logo" priority />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.5}
        speed={0.4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          zIndex: -2,
        }}
      >
        <div
          style={{ opacity: 0.3, width: 175, height: 175, marginLeft: "50%" }}
        >
          <Image src={javascriptLogo} alt="Javascript" priority />
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={2.8}
        speed={0.4}
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignContent: "center",
          zIndex: -2,
        }}
      >
        <div
          style={{ opacity: 0.3, width: 175, height: 175, marginRight: "7%" }}
        >
          <Image src={typescriptLogo} alt="Java Logo" priority />
        </div>
      </ParallaxLayer>
    </>
  );
};

export default ParallaxBackground;
