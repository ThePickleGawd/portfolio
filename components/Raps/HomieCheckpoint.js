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
import Snackbar from "@mui/material/Snackbar";

/*
Ideas:
- Are you a college/job recruiter?
No - "Okay... but also I was really tired when I made these so nothing makes sense"
Yes - Redux state UI to delete raps from navbar, add dialog that says "you dont need to see this...""
*/

const HomieCheckpoint = () => {
  const [open, setOpen] = useState(true);
  const [homieTest, setHomieTest] = useState(false);
  const dispatch = useDispatch();

  const passedTheHomieCheck = () => {
    dispatch({
      type: TYPES.SET_MESSAGE,
      payload: "WELCOME HOMIE!",
    });
    setOpen(false);
  };
  const claimsToBeAHomie = () => setHomieTest(true);

  const acceptsThatTheyAreNotAHomie = () => {
    console.log("acceptsThatTheyAreNotAHomie()");
    dispatch({
      type: TYPES.SET_MESSAGE,
      payload: "Unfortunetly, only the homies can view my raps page...",
    });

    redirectAndDelete();
  };

  const isAnImposter = () => {
    console.log("isAnImposter()");
    dispatch({
      type: TYPES.SET_MESSAGE,
      payload: "Nah bruh you ain't a homie, get out of here!",
    });

    redirectAndDelete();
  };

  const redirectAndDelete = () => {
    dispatch({ type: TYPES.SET_RAPS_HIDDEN, payload: true });
    router.push("/");
  };

  return (
    <Dialog open={open}>
      <DialogTitle>
        {!homieTest ? "Homie Checkpoint" : "Homie Test"}
      </DialogTitle>
      <DialogContent>
        {!homieTest
          ? "Only the homies can experience the absolute fire of these raps..."
          : "Which is better, Gunn or Paly?"}
      </DialogContent>
      <DialogActions>
        {!homieTest ? (
          <>
            <Button onClick={acceptsThatTheyAreNotAHomie}>
              {"I'm not a homie"}
            </Button>
            <Button onClick={claimsToBeAHomie}>{"I'm a homie"}</Button>
          </>
        ) : (
          <>
            <Button onClick={passedTheHomieCheck}>{"Gunn"}</Button>
            <Button onClick={isAnImposter}>{"Paly"}</Button>
          </>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default HomieCheckpoint;
