// Material UI
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

const LyricMeaning = ({ lyrics, meaning }) => {
  return (
    <Tooltip title={meaning} placement="top-start">
      <div style={{ display: "flex" }}>
        <div style={{ backgroundColor: "gray" }}>{lyrics}</div>
        <div />
      </div>
    </Tooltip>
  );
};

export default LyricMeaning;
