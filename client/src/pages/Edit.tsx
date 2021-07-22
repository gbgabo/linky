import "fontsource-roboto";
import React, { ReactElement, ChangeEvent } from "react";
import "../css/App.css";
import { Tab, Tabs, AppBar } from "@material-ui/core";
import { StyleRules } from "@material-ui/styles/withStyles";
import { Palette, FormatAlignCenter, Brush } from "@material-ui/icons";

import * as data from "../samples/data.json";

import Page from "./Page";
import TabPanel from "../components/TabPanel";
import Customize from "../components/Customize";
import Contents from "../components/Contents";

let profileData = data.profile as profileType;
let contentsData = data.contents as contents;
let stylesData = data.styles as StyleRules<{}, string>;

export default function Edit(): ReactElement {
  const [tab, setTab] = React.useState(0);
  const [profile, setProfile] = React.useState(profileData);
  const [contents, setContents] = React.useState(contentsData);
  const [styles, setStyles] = React.useState(stylesData);

  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    setTab(newValue);
  };

  return (
    <div>
      <div className="split left">
        <Page profile={profile} contents={contents} styles={styles} />
      </div>

      <div className="split right">
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
          <div>
            <Contents contents={contents} onChange={setContents} />
          </div>
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <div>
            <Customize styles={styles} onChange={setStyles} />
          </div>
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <div>
            <p>Comming Soon...</p>
          </div>
        </TabPanel>
      </div>
    </div>
  );
}
