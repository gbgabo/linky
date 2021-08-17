import "fontsource-roboto";
import React, { ReactElement } from "react";
import { Grid } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Profile } from "../components/contents";
import { ButtonSection, IconSection } from "../components/sections";
import { StyleRules } from "@material-ui/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import * as data from "../samples/data.json";
interface PageProps {
  profile: profileType;
  contents: contents;
  styles: StyleRules<{}, string>;
}

let profileData = data.profile as profileType;
let contentsData = data.contents as contents;
let stylesData = data.styles as StyleRules<{}, string>;
export default function Page({
  profile = profileData,
  contents = contentsData,
  styles = stylesData,
}: PageProps): ReactElement {
  const useStyles = makeStyles((theme: Theme) => createStyles(styles));
  const classes = useStyles();
  const buttons = contents.filter(
    (content) => content.type !== "icon"
  ) as contents;
  const icons = contents.filter((content) => content.type === "icon") as icons;
  return (
    <div className={classes.page}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Profile content={profile} classes={classes} />
        <ButtonSection buttons={buttons} classes={classes} />
        <IconSection icons={icons} classes={classes} />
      </Grid>
    </div>
  );
}
