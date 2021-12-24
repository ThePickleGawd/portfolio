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
import { RapMeaning } from "data/raps/types";

type LyricsViewerPropTypes = {
  lyrics: string;
  title: string;
  opened: boolean;
  onClose: any;
  meaningArray: Array<RapMeaning>;
};

const LyricsViewer = ({
  lyrics,
  title,
  opened,
  onClose,
  meaningArray,
}: LyricsViewerPropTypes) => {
  const ParseLyrics = () => {
    // replace all instances of "lyric" with <LyricMeaning/>
    let replacedText: string = lyrics;

    meaningArray.forEach((x) => {
      replacedText = reactStringReplace(replacedText, x.lyric, (match, i) => (
        <LyricMeaning lyrics={x.lyric} meaning={x.meaning} />
      )) as unknown as string;
    });

    return replacedText;
  };

  /*
   */

  return (
    <Dialog open={opened} onClose={onClose} disableScrollLock>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ whiteSpace: "pre-wrap" }}>
          {ParseLyrics()}
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default LyricsViewer;
