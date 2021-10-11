// React
import { useRef } from "react";

// Material UI
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";

// Components
import SportViewer from "../components/Sports/SportViewer";
import ReactPlayer from "react-player";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

const SportsPage = () => {
  const parallax = useRef();
  const scroll = (to) => parallax.current.scrollTo(to);
  return (
    <Parallax
      pages={3}
      horizontal
      ref={parallax}
      style={{ overflowX: "hidden" }}
    >
      <ParallaxLayer>
        <SportViewer
          title="Football"
          data={null /*TODO*/}
          scrollNext={() => scroll(1)}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={1}>
        <SportViewer
          title="Basketball"
          data={null /*TODO*/}
          scrollNext={() => scroll(0)}
        />
      </ParallaxLayer>
    </Parallax>
  );
};

export default SportsPage;
