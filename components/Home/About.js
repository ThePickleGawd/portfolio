// React
import React, { useRef } from "react";
import { useOnScreen } from "../../util/helper";

// Material UI
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Fade from "@material-ui/core/Fade";

// React Spring
import { useTrail, animated } from "@react-spring/web";

const items = [
  "- I enjoy ___",
  "- I am really good at _____",
  "- I placed ____ in _____",
  "- Im just the best",
];

const config = { mass: 5, tension: 2000, friction: 200 };

export const About = (props) => {
  const ref = useRef();
  const visible = useOnScreen(ref);

  const trail = useTrail(items.length, {
    config,
    opacity: visible ? 1 : 0,
    x: visible ? 0 : 20,
    height: visible ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
    delay: 500,
  });

  return (
    <div
      style={{
        marginLeft: "10%",
        width: "35%",
        height: "70%",
      }}
      ref={ref}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Fade in={visible} timeout={3000}>
          <Typography variant="h2" style={{ marginTop: 15 }}>
            {"About Me"}
          </Typography>
        </Fade>
      </div>
      <div style={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div style={{ height }}>
              <Typography variant="h4">{items[index]}</Typography>
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default About;
