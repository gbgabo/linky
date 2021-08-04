import "fontsource-roboto";
import React, { ReactElement, ChangeEvent } from "react";
import "../css/App.css";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import { StyleRules } from "@material-ui/styles/withStyles";
import { Palette, FormatAlignCenter, Brush } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

import * as data from "../samples/data.json";

import Page from "./Page";
import TabPanel from "../components/TabPanel";
import Customize from "../components/Customize";
import Contents from "../components/Contents";

let profileData = data.profile as profileType;
let contentsData = data.contents as contents;
let stylesData = data.styles as StyleRules<{}, string>;

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
    backgroundColor: "#f4f1de",
  },
}));

export default function Edit(): ReactElement {
  const [tab, setTab] = React.useState(0);
  const [profile, setProfile] = React.useState(profileData);
  const [contents, setContents] = React.useState(contentsData);
  const [styles, setStyles] = React.useState(stylesData);

  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };
  const classes = useStyles();
  return (
    <div>
      <div className={`${classes.left} ${classes.split}`}>
        <Page profile={profile} contents={contents} styles={styles} />
      </div>

      <div className={`${classes.right} ${classes.split}`}>
        <AppBar position="static" color="default">
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
          <Contents
            profile={profile}
            contents={contents}
            onChange={setContents}
            onProfileChange={setProfile}
          />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Customize styles={styles} onChange={setStyles} />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <p>Comming Soon...</p>
        </TabPanel>
      </div>
    </div>
  );
}
