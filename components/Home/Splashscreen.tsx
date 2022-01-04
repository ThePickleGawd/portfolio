// React
import { useState } from "react";

// Lottie
import Lottie from "lottie-react";
import animation from "public/lottie/data.json";

const Splashscreen = ({ onComplete }) => {
  const [hidden, setHidden] = useState(false);

  const handleComplete = () => {
    onComplete();
    setHidden(true);
  };

  return (
    <Lottie
      animationData={animation}
      loop={false}
      hidden={hidden}
      onComplete={handleComplete}
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
