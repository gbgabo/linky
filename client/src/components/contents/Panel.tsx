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
  content: panelType;
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
      classes={{ root: classes.panel }}
      square={false}
      expanded={expanded}
      onChange={onChange}
    >
      <AccordionSummary
        classes={{
          root: classes.button,
          content: classes.label,
          expandIcon: classes.expandedIcon,
        }}
        expandIcon={<Icon>expand_more</Icon>}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        {content.icon === "none" ? null : (
          <Typography className={classes.icon}>
            <Icon>{content.icon}</Icon>
          </Typography>
        )}
        {content.name}
      </AccordionSummary>
      <AccordionDetails>
        <p>{content.details}</p>
      </AccordionDetails>
    </Accordion>
  );
}
