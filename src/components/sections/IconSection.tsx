import { Grid, Icon, IconButton } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import React, { ReactElement } from "react";

interface IconSectionProps {
  icons: icons;
  classes: ClassNameMap<any>;
}

export default function IconSection({
  icons,
  classes,
}: IconSectionProps): ReactElement {
  return (
    <Grid
      container
      direction="row"
      justify="center"
      alignItems="center"
      spacing={2}
    >
      {icons.map((icon) => {
        return (
          <Grid item>
            <IconButton className={classes.iconLink} href={icon.address}>
              <Icon>{icon.icon}</Icon>
            </IconButton>
          </Grid>
        );
      })}
    </Grid>
  );
}
