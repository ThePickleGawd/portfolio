import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";
import { makeStyles, Typography } from "@mui/material";

const Trail: React.FC<{ open: boolean }> = ({ open, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 500 },
    opacity: open ? 1 : 0,
    height: open ? 100 : 0,
    from: { opacity: 0, x: 20, height: 100 },
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
          }}
        >
          <a.div style={{ height, overflow: "hidden" }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

export default function Welcome({ opened }) {
  return (
    <div style={{ height: "100%", marginTop: 50, marginLeft: 50 }}>
      <Trail open={opened}>
        <Typography variant="h1">{"Hey,"}</Typography>
        <Typography variant="h1">
          {"I'm"} <span style={{ color: "F0F9FE" }}>{"Dylan..."}</span>
        </Typography>
      </Trail>

      <Trail open={opened}>
        <div />
        <Typography variant="h1">
          <span style={{ color: "#79D8F7" }}>{"React "}</span>
          {"developer"}
        </Typography>
        <Typography variant="h1">
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
      </Trail>
    </div>
  );
}
