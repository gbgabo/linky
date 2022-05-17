import React from "react";
import { Grid } from "@material-ui/core";
import { Profile } from "../components/contents";
import { ButtonSection, IconSection } from "../components/sections";

import { useTheme } from "../context/Theme";

type Props = {
  profile: profileType;
};

export default function Home({ profile }: Props) {
  const { classes, contents } = useTheme();

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
