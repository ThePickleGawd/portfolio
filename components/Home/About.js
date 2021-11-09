// React
import React, { useRef, useState } from "react";
import { useOnScreen } from "../../util/helper";

// Material UI
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Fade from "@mui/material/Fade";

// React Spring
import { useTrail, animated } from "@react-spring/web";

const items = [
  {
    id: 0,
    render: (
      <span>
        {"- Sophmore at "}
        <span style={{ color: "red" }}>{"Gunn"}</span> {" High School"}
      </span>
    ),
    image: null,
  },
  {
    id: 1,
    render: (
      <span>
        {"- Three-seasoned"}{" "}
        <span style={{ color: "#FCB131" }}>{"athlete"}</span>
      </span>
    ),
  },
  {
    id: 2,
    render: "- Game designer",
  },
  {
    id: 3,
    rendesr: "- I love coding and web desgign",
    render: (
      <span>
        {"- I love "}
        <span style={{ color: "#2a62c9" }}>{"coding"}</span>
        {" and "}
        <span style={{ color: "#2a62c9" }}>{"web design"}</span>
      </span>
    ),
  },

  {
    id: 4,
    render: "- Im just the best?",
  },
];

/*
TODO:
On hover, have a text pop animation,
For sports, change the pfp to my football picture
For videogames, show demo of some games I made,
Coding and webdesign todo...
Default: Regular pfp
*/

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
    //delay: 500,
  });

  const setImage = (image) => {
    console.log("hover");
    // TODO: REDUX STUFF
  };

  // const [styles, api] = useSprint(() => )

  return (
    <div ref={ref}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Fade in={visible} timeout={2000}>
          <Typography variant="h2" style={{ marginTop: 15 }}>
            {"About Me"}
          </Typography>
        </Fade>
      </div>
      <br />
      <div style={{ display: "flex", flexDirection: "column", marginTop: 10 }}>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index].id}
            style={{
              ...rest,
              transform: x.to((x) => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div
              style={{ height }}
              onMouseEnter={() => setImage(items[index].image)}
            >
              <Typography variant="h4">{items[index].render}</Typography>
            </animated.div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default About;
