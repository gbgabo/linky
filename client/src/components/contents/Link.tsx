import React, { ReactElement } from "react";
import { ClassNameMap } from "@material-ui/styles";
import { Button, Icon } from "@material-ui/core";

interface LinkProps {
  content: {
    icon: string;
    name: string;
    type: string;
    address: string;
  };
  classes: ClassNameMap<any>;
}

export default function Link({ content, classes }: LinkProps): ReactElement {
  return (
    <Button
      classes={{
        root: classes.button,
        startIcon: classes.startIcon,
        label: classes.label,
      }}
      //   size="large"
      href={content.address}
      // startIcon={DynamicIcon !== null && <DynamicIcon />}
    >
      <Icon>{content.icon}</Icon>
      {content.name}
    </Button>
  );
}
