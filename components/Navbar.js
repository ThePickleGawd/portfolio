// React
import React from "react";
import router, { useRouter } from "next/router";

// Material UI
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const Navbar = (props) => {
  const handleClick = (to) => {
    router.push(to);
  };

  const locations = [
    { to: "/", name: "Home" },
    { to: "/#about", name: "About" },
    { to: "/#work", name: "Work" },
    { to: "/#contact", name: "Contact" },
    { to: "/raps", name: "Raps" },
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
