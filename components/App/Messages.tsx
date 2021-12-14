// React
import { useState } from "react";

// Redux
import { useAppSelector, useAppDispatch } from "redux/hooks";
import * as TYPES from "redux/types";

// Material UI
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

const Messages = () => {
  const dispatch = useAppDispatch();
  const { messageOpened, message } = useAppSelector((state) => state.UI);

  const onClose = () => {
    dispatch({ type: TYPES.SET_MESSAGE_OPENED, payload: false });
  };

  return (
    <Snackbar open={messageOpened} autoHideDuration={5000} onClose={onClose}>
      <Alert severity="info">{message}</Alert>
    </Snackbar>
  );
};

export default Messages;
