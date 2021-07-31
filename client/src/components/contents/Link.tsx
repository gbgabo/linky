import React, { ReactElement } from "react";
import { ClassNameMap } from "@material-ui/styles";
import { Button, Icon, Typography } from "@material-ui/core";

interface LinkProps {
  content: linkType;
  classes: ClassNameMap<any>;
}

export default function Link({ content, classes }: LinkProps): ReactElement {
  return (
    <Button
      classes={{ root: classes.button, label: classes.label }}
      href={content.address}
    >
      {content.icon === "none" ? null : (
        <Typography className={classes.icon}>
          <Icon>{content.icon}</Icon>
        </Typography>
      )}
      <Typography>{content.name}</Typography>
    </Button>
  );
}
