import React, { ReactElement, ChangeEvent } from "react";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import { Palette, FormatAlignCenter, Brush } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import * as data from "../samples/data.json";

import TabPanel from "../components/TabPanel";
import Customize from "../components/Customize";
import Contents from "../components/Contents";
import ThemeProvider from "../context/Theme";
import Home from "../components/Home";

let profileData = data.profile as profileType;

const useStyles = makeStyles((theme) => ({
  split: {
    height: "100%",
    width: "50%",
    position: "fixed",
    zIndex: 1,
    top: 0,
    overflowX: "hidden",
  },
  left: {
    left: 0,
    backgroundColor: "#61dafb",
  },
  right: {
    right: 0,
    backgroundColor: "#FAEBE0",
  },
}));

export default function Edit(): ReactElement {
  const [tab, setTab] = React.useState(0);
  const [profile, setProfile] = React.useState(profileData);

  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };
  const classes = useStyles();
  return (
    <div>
      <ThemeProvider>
        <div className={`${classes.left} ${classes.split}`}>
          <Home profile={profile} />
        </div>

        <div className={`${classes.right} ${classes.split}`}>
          <AppBar position="sticky" color="default">
            <Tabs
              value={tab}
              onChange={handleTabChange}
              variant="fullWidth"
              aria-label="simple tabs example"
            >
              <Tab icon={<FormatAlignCenter />} label="Content" />
              <Tab icon={<Brush />} label="Appearance" />
              <Tab icon={<Palette />} label="Themes" />
            </Tabs>
          </AppBar>
          <TabPanel value={tab} index={0}>
            <Contents profile={profile} onProfileChange={setProfile} />
          </TabPanel>
          <TabPanel value={tab} index={1}>
            <Customize />
          </TabPanel>
          <TabPanel value={tab} index={2}>
            <p>Comming Soon...</p>
          </TabPanel>
        </div>
      </ThemeProvider>
    </div>
  );
}
