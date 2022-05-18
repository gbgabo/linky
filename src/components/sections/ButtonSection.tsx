import React, { ReactElement, ChangeEvent, Fragment } from "react";
import { ClassNameMap } from "@material-ui/core/styles/withStyles";
import { Grid } from "@material-ui/core";
import { Link, Section, Panel } from "../contents";

interface Props {
  buttons: contents;
  classes: ClassNameMap<any>;
}

export default function ButtonSection({
  buttons,
  classes,
}: Props): ReactElement {
  const [expandedPanel, setExpandedPanel] = React.useState(-1);

  const handlePanelChange =
    (panel: number) => (event: ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedPanel(isExpanded ? panel : -1);
    };
  return (
    <Fragment>
      {buttons.map((content, index) => {
        let contentElement;
        contentElement =
          content.type === "section" ? (
            <Section content={content} classes={classes} />
          ) : (
            contentElement
          );
        contentElement =
          content.type === "panel" ? (
            <Panel
              content={content}
              classes={classes}
              onChange={handlePanelChange(index)}
              expanded={expandedPanel === index}
            />
          ) : (
            contentElement
          );
        contentElement =
          content.type === "link" ? (
            <Link content={content} classes={classes} />
          ) : (
            contentElement
          );

        return <Grid item>{contentElement}</Grid>;
      })}
    </Fragment>
  );
}
