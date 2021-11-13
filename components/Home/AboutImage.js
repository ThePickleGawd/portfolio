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
        <Avatar alt="Dylan Lu" style={{ width: 400, height: 400 }}>
          <Image
            src={defaultPic}
            alt="Dylan Lu"
            width={400}
            height={400}
            priority
          />
        </Avatar>
      </Fade>
    </div>
  );
};

export default AboutImage;
