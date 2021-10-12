// Material UI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const LyricsViewer = ({ lyrics, opened, title, onClose }) => {
  return (
    <Dialog open={opened} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ whiteSpace: "pre-wrap" }}>
          {lyrics}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default LyricsViewer;
