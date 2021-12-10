// React
import { useState, useRef } from "react";
import PropTypes from "prop-types";

// Material UI
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import Container from "@mui/material/Container";
import SwipeableViews from "react-swipeable-views";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";

// Components
import SportViewer from "../components/Sports/SportViewer";
import ReactPlayer from "react-player";

// Data
import sportsData from "../data/sports/sportsData";

const Sports = () => {
  const [tab, setTab] = useState(0);

  const handleChange = (event, newValue) => {
    setTab(newValue);
  };

  const handleChangeIndex = (index) => {
    setTab(index);
  };

  return (
    <Card>
      <AppBar position="static">
        <Tabs value={tab} onChange={handleChange} variant="fullWidth">
          <Tab label="Football" {...a11yProps(0)} />
          <Tab label="Basketball" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <SwipeableViews index={tab} onChangeIndex={handleChangeIndex}>
        {sportsData.map((sport, index) => {
          return (
            <TabPanel key={sport.name} index={index} value={tab}>
              <SportViewer title={sport.name} data={sport.data} />
            </TabPanel>
          );
        })}
      </SwipeableViews>
    </Card>
  );
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default Sports;
