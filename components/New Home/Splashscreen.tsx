// React
import { useEffect, useState } from "react";

// Lottie
import Lottie from "lottie-react";
import desktopAnimation from "public/lottie/splashscreen.json";
import mobileAnimation from "public/lottie/data.json";

import useMediaQuery from "@mui/material/useMediaQuery";

const Splashscreen = ({ onComplete }) => {
  const [hidden, setHidden] = useState(false);

  const smallScreen = useMediaQuery("(max-width:1024px");

  useEffect(() => {
    if (smallScreen) handleComplete();
  }, [smallScreen]);

  const handleComplete = () => {
    onComplete();
    setHidden(true);
  };

  return (
    <Lottie
      animationData={desktopAnimation}
      loop={false}
      hidden={hidden}
      onComplete={handleComplete}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice",
      }}
      style={{
        position: "fixed",
        width: "100vw",
        height: "100vh",
        top: 0,
      }}
    />
  );
};

export default Splashscreen;
