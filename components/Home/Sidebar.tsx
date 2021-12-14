// React
import PropTypes from "prop-types";
import { useRouter } from "next/router";

// Material UI
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const locations = [
  { to: "/#about", name: "About" },
  { to: "/#work", name: "Work" },
  { to: "/#contact", name: "Contact" },
];

const HomeSidebar = (props) => {
  const { parallaxRef } = props;
  const router = useRouter();

  const handleClick = (to) => {
    router.push(to);
  };

  return (
    <div
      style={{
        position: "fixed",
        right: 25,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      }}
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
    </div>
  );
};

HomeSidebar.propTypes = {
  parallaxRef: PropTypes.any.isRequired,
};

export default HomeSidebar;
