import React, { Fragment, ReactElement } from "react";
import { ButtonEditorSection, ProfileEditor } from "./editors";
import "../css/App.css";
import IconEditorSection from "./editors/sections/IconEditorSection";
import { Divider, Grid } from "@material-ui/core";

interface ContentsProps {
  profile: profileType;
  contents: contents;
  onChange: (state: contents) => void;
  onProfileChange: (profile: profileType) => void;
}

export default function Contents({
  profile,
  contents,
  onChange,
  onProfileChange,
}: ContentsProps): ReactElement {
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
          <ButtonEditorSection contents={contents} onChange={onChange} />
        </Grid>
        <Grid item>
          <Divider />
        </Grid>
        <Grid item>
          <IconEditorSection contents={contents} onChange={onChange} />
        </Grid>
      </Grid>
    </Fragment>
  );
}
