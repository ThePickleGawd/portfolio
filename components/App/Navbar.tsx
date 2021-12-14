// React
import React from "react";
import router, { useRouter } from "next/router";

// Redux
import { useAppSelector } from "redux/hooks";

// Material UI
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Navbar = (props) => {
  const rapsHidden = useAppSelector((state) => state.UI.rapsHidden);

  const handleClick = (to) => {
    router.push(to);
  };

  const locations = [
    { to: "/", name: "Home", disabled: false },
    { to: "/raps", name: "Raps", disabled: rapsHidden },
    { to: "/sports", name: "Sports", disabled: false },
    { to: "https://study.dylanlu.com", name: "Study (beta)", disabled: false },
  ];

  return (
    <div>
      <Toolbar
        variant="dense"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {locations.map((location) => {
          return (
            <Button
              disableRipple
              onClick={() => handleClick(location.to)}
              key={location.name}
              disabled={location.disabled}
            >
              <Typography>{location.name}</Typography>
            </Button>
          );
        })}
      </Toolbar>
    </div>
  );
};

export default Navbar;
