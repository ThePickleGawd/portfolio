// React
import { useState } from "react";

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
  const [property, setSortProperty] = useState("date");

  const handleChange = (event) => {
    setSortProperty(event.target.value);
    // dispatch({
    //   type: TYPES.SET_RAPS,
    //   action: raps.sort((a, b) => a[property] > b[property]),
    // });
    console.log(raps[0].date.getTime());
    console.log(raps.sort((a, b) => a.date.getTime() < b.date.getTime()));
    dispatch({ type: TYPES.SORT_BY_DATE });
  };

  return (
    <FormControl style={{ minWidth: 150 }}>
      {raps && (
        <>
          <InputLabel>{"Sort"}</InputLabel>
          <Select label="Sort" onChange={handleChange} value={property}>
            <MenuItem value={"date"}>Most Recent</MenuItem>
            <MenuItem value={"fire"}>Most Fire</MenuItem>
          </Select>
        </>
      )}
    </FormControl>
  );
};

export default FilterButton;
