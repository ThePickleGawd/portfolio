// React
import { useState } from "react";
import router from "next/router";

// Redux
import { useDispatch } from "react-redux";
import * as TYPES from "../../redux/types";

// Material UI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

/*
Ideas:
- Are you a college/job recruiter?
No - "Okay... but also I was really tired when I made these so nothing makes sense"
Yes - Redux state UI to delete raps from navbar, add dialog that says "you dont need to see this...""
*/

const Disclamer = () => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const onClose = () => {
    setOpen((x) => !x);
  };

  const redirectAndDelete = () => {
    dispatch({ type: TYPES.SET_RAPS_HIDDEN, payload: true });
    router.push("/");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{"Are you a college/job recruiter?"}</DialogTitle>
      <DialogContent>
        {"cuz like I was really tired when I made these..."}
      </DialogContent>
      <DialogActions>
        <Button onClick={redirectAndDelete}>YES</Button>
        <Button onClick={onClose}>No</Button>
      </DialogActions>
    </Dialog>
  );
};

export default Disclamer;
