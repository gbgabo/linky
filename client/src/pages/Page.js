import "fontsource-roboto";
import React from "react";
import { Fragment } from "react";
import {
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Typography,
  Icon,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMore } from "@material-ui/icons";

import profile from "../samples/profile.png";
import * as data from "../samples/data";

export default function Page({
  contents = data.contents,
  styles = data.styles,
}) {
  const [expanded, setExpanded] = React.useState(false);

  const useStyles = makeStyles((theme) => styles);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const classes = useStyles();

  return (
    <div className={classes.page}>
      <img className={classes.profile} alt="profile" src={profile} />
      <p className={classes["profile-text"]}>@gb_gabo</p>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        {contents.map((content, index) => {
          let DynamicIcon = content.icon === "none" ? null : content.icon;
          let contentElement;
          contentElement =
            content.type === "section" ? (
              <Fragment>
                {content.icon === "none" ? null : (
                  <Fragment>
                    <Typography className={classes.startIcon}>
                      <Icon>{content.icon}</Icon>
                    </Typography>
                    <Typography>
                      {" "}
                      <p className={classes.section}>{content.name}</p>
                    </Typography>
                  </Fragment>
                )}
              </Fragment>
            ) : (
              contentElement
            );
          contentElement =
            content.type === "panel" ? (
              <Accordion
                className={classes.panel}
                square={false}
                expanded={expanded === index}
                onChange={handleChange(index)}
              >
                <AccordionSummary
                  classes={{
                    root: classes["panel-details"],
                    content: classes.content,
                  }}
                  expandIcon={<ExpandMore />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  {content.icon === "none" ? null : (
                    <Typography className={classes.startIcon}>
                      <Icon>{content.icon}</Icon>
                    </Typography>
                  )}
                  <Typography className={classes.heading}>
                    {content.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{content.details}</p>
                </AccordionDetails>
              </Accordion>
            ) : (
              contentElement
            );
          contentElement =
            content.type === "link" ? (
              <Button
                key={content._id}
                classes={{
                  root: classes.button,
                  startIcon: classes.startIcon,
                  label: classes.label,
                }}
                size="medium"
                href={content.address}
                // startIcon={DynamicIcon !== null && <DynamicIcon />}
              >
                <Icon>{content.icon}</Icon>
                {content.name}
              </Button>
            ) : (
              contentElement
            );

          return <Grid item>{contentElement}</Grid>;
        })}
      </Grid>
    </div>
  );
}
