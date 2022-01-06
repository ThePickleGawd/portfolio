// React
import React, { useState, useEffect } from "react";
import ReactVisibilitySensor from "react-visibility-sensor";

// React Spring
import { IParallax } from "@react-spring/parallax";
import { useTrail, a } from "@react-spring/web";

// MUI
import Typography from "@mui/material/Typography";

// Components
import ColorChanger from "./ColorChanger";
import { useScrollCheck } from "util/helper";

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 500 },
    opacity: open ? 1 : 0,
    height: open ? 100 : 0,
    reverse: !open,
    from: { opacity: 0, height: 0 },
  });

  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div
          key={index}
          style={{
            ...style,
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "100px",
            lineHeight: 80,
          }}
        >
          <a.div style={{ height, overflow: "hidden" }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const Trail2: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { duration: 1000 },
    opacity: open ? 1 : 0,
    from: { opacity: 0 },
    reverse: !open,
  });

  return (
    <div>
      {trail.map(({ ...style }, index) => (
        <a.div
          key={index}
          style={{
            ...style,
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "60px",
            lineHeight: 50,
          }}
        >
          <a.div style={{ overflow: "hidden" }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

const Welcome: React.FC<{
  splashed: boolean;
  container: HTMLDivElement;
}> = ({ splashed, container }) => {
  const open = useScrollCheck(container, 0, 2000);

  return (
    <div style={{ height: "100%" }}>
      <Trail open={splashed && open}>
        <Typography variant="h1">{"Hey,"}</Typography>
        <Typography variant="h1">
          {"I'm "}

          <ColorChanger>{"Dylan..."}</ColorChanger>
        </Typography>
      </Trail>

      <Trail2 open={splashed && open}>
        <div />
        <Typography variant="h3">
          <span style={{ color: "#79D8F7" }}>{"React "}</span>
          {"developer"}
        </Typography>
        <Typography variant="h3">
          <span
            style={{
              color: "black",
              WebkitTextStrokeColor: "white",
              WebkitTextStrokeWidth: 0.7,
            }}
          >
            {"Unity "}
          </span>
          {"developer"}
        </Typography>
      </Trail2>
    </div>
  );
};

export default Welcome;
