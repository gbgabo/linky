import React, { ReactElement, Fragment } from "react";
import { Typography, Icon } from "@material-ui/core";
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
    <Fragment>
      {content.icon === "none" ? null : (
        <Typography className={classes.section}>
          <Icon>{content.icon}</Icon>
        </Typography>
      )}
      <Typography>
        <p className={classes.section}>{content.name}</p>
      </Typography>
    </Fragment>
  );
}
