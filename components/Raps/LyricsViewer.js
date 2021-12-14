// React
import PropTypes from "prop-types";
import reactStringReplace from "react-string-replace";

// Material UI
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

// Components
import LyricMeaning from "./LyricMeaning";

const LyricsViewer = ({ lyrics, title, opened, onClose, meaningArray }) => {
  const ParseLyrics = () => {
    // replace all instances of "lyric" with <LyricMeaning/>
    let replacedText = lyrics;

    meaningArray.forEach((x) => {
      replacedText = reactStringReplace(replacedText, x.lyric, (match, i) => (
        <LyricMeaning lyrics={x.lyric} meaning={x.meaning} />
      ));
    });

    return replacedText;
  };

  /*
   */

  return (
    <Dialog open={opened} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ whiteSpace: "pre-wrap" }}>
          {ParseLyrics()}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

LyricsViewer.propTypes = {
  lyrics: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  meaningArray: PropTypes.array.isRequired,
};

export default LyricsViewer;
