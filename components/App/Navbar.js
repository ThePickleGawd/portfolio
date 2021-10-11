// React
import React from "react";
import router, { useRouter } from "next/router";

// Material UI
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export const Navbar = (props) => {
  const handleClick = (to) => {
    router.push(to);
  };

  const locations = [
    { to: "/", name: "Home" },
    { to: "/raps", name: "Raps" },
    { to: "/sports", name: "Sports" },
  ];

  return (
    <div>
      <Toolbar
        variant="dense"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        {locations.map((loc) => {
          return (
            <Button
              disableRipple
              onClick={() => handleClick(loc.to)}
              key={loc.name}
            >
              <Typography>{loc.name}</Typography>
            </Button>
          );
        })}
      </Toolbar>
    </div>
  );
};

export default Navbar;
