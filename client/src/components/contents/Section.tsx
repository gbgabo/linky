import React, { ReactElement } from "react";
import { Typography, Icon, Grid } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";

interface SectionProps {
  content: sectionType;
  classes: ClassNameMap<any>;
}

export default function Section({
  content,
  classes,
}: SectionProps): ReactElement {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      <Grid item>
        {content.icon === "none" ? null : (
          <Typography className={classes.section}>
            <Icon>{content.icon}</Icon>
          </Typography>
        )}
      </Grid>
      <Grid item>
        <Typography>
          <p className={classes.section}>{content.name}</p>
        </Typography>
      </Grid>
    </Grid>
  );
}
