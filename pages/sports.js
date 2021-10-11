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

// Data
import sportsData from "../data/sportsData";

const Sports = () => {
  const parallax = useRef();
  const scroll = (to) => parallax.current.scrollTo(to);
  const scrollNext = (index) =>
    parallax.current.scrollTo(index + 1 >= sportsData.length ? 0 : index + 1);
  const scrollPrev = (index) =>
    parallax.current.scrollTo(
      index - 1 < 0 ? sportsData.length - 1 : index - 1
    );
  return (
    <div>
      <Parallax
        pages={sportsData.length}
        horizontal
        ref={parallax}
        style={{ overflowX: "hidden", overflowY: "hidden", height: "300vh" }}
      >
        {sportsData.map((sport, index) => {
          return (
            <ParallaxLayer
              key={sport.name}
              offset={index}
              style={{ overflowY: "auto" }}
            >
              <SportViewer
                title={sport.name}
                data={sport.data}
                scrollNext={() => scrollNext(index)}
                scrollPrev={() => scrollPrev(index)}
              />
            </ParallaxLayer>
          );
        })}
      </Parallax>
    </div>
  );
};

export default Sports;
