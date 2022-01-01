// React
import { useState } from "react";

// Lottie
import Lottie from "lottie-react";
import animation from "public/lottie/splashscreen.json";

const Splashscreen = () => {
  const [hidden, setHidden] = useState(false);

  const onComplete = () => {
    setHidden(true);
  };

  return (
    <Lottie
      animationData={animation}
      loop={false}
      hidden={hidden}
      onComplete={onComplete}
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice",
      }}
      style={{
        position: "fixed",
        width: "auto",
        height: "100vh",
        top: 0,
      }}
    />
  );
};

export default Splashscreen;
