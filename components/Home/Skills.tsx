// Material UI
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
import Fade from "@mui/material/Fade";

import { useTrail, animated } from "@react-spring/web";
import { useOnScreen } from "util/helper";
import { useRef } from "react";

// Skills from 0-5
const skills = [
  { name: "React (JS or TS)", val: 80 },
  { name: "Unity + C# + Game Design", val: 95 },
  { name: "C++ & Algorithms", val: 70 },
  { name: "Other languages (Python, Java, etc)", val: 45 },
  { name: "Scoring toudies!", val: 100 },
  { name: "Making music videos about my amazing games/apps!", val: 100 },
];

const config = { mass: 5, tension: 2000, friction: 200 };

const Skills = (props: { fadeIn: Boolean }) => {
  const { fadeIn } = props;

  const ref = useRef();
  const visible = useOnScreen(ref);

  const trail = useTrail(skills.length, {
    config,
    opacity: visible ? 1 : 0,
    x: visible ? 0 : 20,
    height: visible ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        width: "100%",
      }}
      ref={ref}
    >
      <Fade in={!fadeIn || visible} timeout={2000}>
        <Typography variant="h2" alignSelf="center">
          {"Skills"}
        </Typography>
      </Fade>
      {trail.map(({ x, height, ...rest }, index) => (
        <animated.div
          key={skills[index].name}
          style={{
            ...rest,
            transform: x.to((x) => `translate3d(0,${x}px,0)`),
          }}
        >
          <animated.div style={{ /*height*/ height: "auto" }}>
            <Typography variant="h4">{skills[index].name}</Typography>
            <LinearProgress
              style={{ height: 15 }}
              variant="determinate"
              value={visible ? skills[index].val : 0}
            />
            <br />
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
};

export default Skills;
