// React, Redux
import { useEffect, useRef } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import * as TYPES from "../../redux/types";

// MUI
import Avatar from "@mui/material/Avatar";
import Fade from "@mui/material/Fade";

// Helper
import { useOnScreen } from "../../util/helper";

// Pictures
import defaultPic from "../../public/images/me/default.jpg";

const AboutImage = ({ fadeIn }) => {
  const image = useSelector((state) => state.UI.image);
  const dispatch = useDispatch();

  const ref = useRef();

  const visible = useOnScreen(ref);

  return (
    <div ref={ref}>
      <Fade in={!fadeIn || visible} timeout={2000}>
        <div
          style={{
            maxWidth: 500,
            maxHeight: 500,
            borderRadius: "50%",
            overflow: "hidden",
          }}
        >
          <Image src={defaultPic} alt="Dylan Lu" layout="intrinsic" priority />
        </div>
      </Fade>
    </div>
  );
};

export default AboutImage;
