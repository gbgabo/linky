import React, { ReactElement } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Icon,
} from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";

interface PanelProps {
  content: {
    icon: string;
    name: string;
    type: "panel";
    details: string;
  };
  classes: ClassNameMap<any>;
  expanded: boolean;
  onChange: (event: React.ChangeEvent<{}>, expanded: boolean) => void;
}

export default function Panel({
  content,
  classes,
  expanded,
  onChange,
}: PanelProps): ReactElement {
  return (
    <Accordion
      className={classes.panel}
      square={false}
      expanded={expanded}
      onChange={onChange}
    >
      <AccordionSummary
        classes={{
          root: classes["panel-details"],
          content: classes.content,
        }}
        expandIcon={<Icon>expand_more</Icon>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {content.icon === "none" ? null : (
          <Typography className={classes.startIcon}>
            <Icon>{content.icon}</Icon>
          </Typography>
        )}
        <Typography className={classes.heading}>{content.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <p>{content.details}</p>
      </AccordionDetails>
    </Accordion>
  );
}
