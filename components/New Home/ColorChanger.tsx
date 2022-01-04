import { useState } from "react";
import { animated, useSpring, config } from "@react-spring/web";

const ColorChanger = ({ children }) => {
  const [flip, setFlip] = useState(false);
  const styles = useSpring({
    to: { backgroundPosition: "200% center" },
    from: { backgroundPosition: "0% auto" },
    delay: 0,
    reverse: flip,
    reset: true,
    config: {
      easing: (t) => ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2,
      tension: 20,
      friction: 15,
    },
    onRest: () => setFlip(!flip),
  });

  return (
    <animated.span
      style={{
        ...styles,
        backgroundImage:
          "linear-gradient(90deg, rgba(191,191,191,1) 0%, rgba(203,203,203,1) 55%, rgba(34,34,34,1) 100%)",
        backgroundSize: "200% auto",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      {children}
    </animated.span>
  );
};

/**color: #000;
  background-clip: text;
  text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */

export default ColorChanger;
