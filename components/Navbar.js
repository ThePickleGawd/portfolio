// React
import router, { useRouter } from "next/router";

// Material UI
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

export const Navbar = (props) => {
  const handleClickAbout = (event) => {
    router.push("/#about");
  };

  const handleClickWork = (event) => {
    router.push("/#work");
  };
  const handleClickContact = (event) => {
    router.push("/#contact");
  };

  return (
    <div>
      <Toolbar
        variant="dense"
        style={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button disableRipple onClick={handleClickAbout}>
          <Typography>About</Typography>
        </Button>
        <Button disableRipple onClick={handleClickWork}>
          <Typography>Work</Typography>
        </Button>
        <Button disableRipple onClick={handleClickContact}>
          <Typography>Contact</Typography>
        </Button>
      </Toolbar>
    </div>
  );
};

export default Navbar;
