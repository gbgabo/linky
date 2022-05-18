import React, { Fragment, ReactElement } from "react";
import { ButtonEditorSection, ProfileEditor } from "./editors";
import "../css/App.css";
import IconEditorSection from "./editors/sections/IconEditorSection";
import { Divider, Grid } from "@material-ui/core";

import { useTheme } from "../context/Theme";

interface ContentsProps {
  profile: profileType;
  onProfileChange: (profile: profileType) => void;
}

export default function Contents({
  profile,
  onProfileChange,
}: ContentsProps): ReactElement {
  const { contents, setContents } = useTheme();
  return (
    <Fragment>
      <Grid container direction="column" alignContent="stretch" spacing={3}>
        <Grid item>
          <ProfileEditor profile={profile} onChange={onProfileChange} />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <ButtonEditorSection contents={contents} onChange={setContents} />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <IconEditorSection contents={contents} onChange={setContents} />
        </Grid>
      </Grid>
    </Fragment>
  );
}
