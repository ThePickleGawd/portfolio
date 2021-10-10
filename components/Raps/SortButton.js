// React
import { useEffect, useState } from "react";

// Material UI
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

// Redux
import { useSelector, useDispatch } from "react-redux";
import * as TYPES from "../../redux/types";

const FilterButton = () => {
  const dispatch = useDispatch();
  const raps = useSelector((state) => state.music.raps);
  const [property, setSortProperty] = useState("recent");

  useEffect(() => {
    dispatch({
      type: TYPES.SET_RAPS,
      payload: raps
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .map((x) => x),
    });
  }, []);

  const handleChange = (event) => {
    setSortProperty(event.target.value);
    // .map is cuz mutating array doesn't cause rerender
    switch (event.target.value) {
      case "recent":
        dispatch({
          type: TYPES.SET_RAPS,
          payload: raps
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((x) => x),
        });
        break;
      case "oldest":
        dispatch({
          type: TYPES.SET_RAPS,
          payload: raps
            .sort((a, b) => a.date.getTime() - b.date.getTime())
            .map((x) => x),
        });
        break;
      case "fire":
        dispatch({
          type: TYPES.SET_RAPS,
          payload: raps.sort((a, b) => b.fire - a.fire).map((x) => x),
        });
        break;
      default:
        break;
    }
  };

  return (
    <FormControl style={{ minWidth: 150 }}>
      {raps && (
        <>
          <Select
            label="Sort"
            onChange={handleChange}
            value={property}
            variant="standard"
          >
            <MenuItem value={"recent"}>Most Recent</MenuItem>
            <MenuItem value={"oldest"}>Oldest</MenuItem>
            <MenuItem value={"fire"}>Most Fire</MenuItem>
          </Select>
        </>
      )}
    </FormControl>
  );
};

export default FilterButton;
