// Material UI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

const MeaningViewer = ({ opened, onClose, meaningArray }) => {
  return (
    <Dialog open={opened} onClose={onClose} disableScrollLock>
      <DialogTitle>{"WTF does that mean???"}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ whiteSpace: "pre-wrap" }}>
          {meaningArray.map((meaning) => {
            return (
              <div key={meaning.lyric}>
                <DialogContentText>
                  <b>{meaning.lyric}</b>
                </DialogContentText>
                <DialogContentText>{meaning.meaning}</DialogContentText>
                <br />
              </div>
            );
          })}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default MeaningViewer;
