// React, Redux
import { useEffect } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import * as TYPES from "../../redux/types";

// MUI
import Avatar from "@mui/material/Avatar";

// Pictures
import defaultPic from "../../public/aboutImages/default.jpg";

const AboutImage = () => {
  const image = useSelector((state) => state.UI.image);
  const dispatch = useDispatch();
  return (
    <Avatar
      alt="Dylan Lu"
      style={{ width: 400, height: 400, marginRight: "15%" }}
    >
      <Image
        src={defaultPic}
        alt="Dylan Lu"
        width={400}
        height={400}
        priority
      />
    </Avatar>
  );
};

export default AboutImage;
