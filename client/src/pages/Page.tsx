import "fontsource-roboto";
import React, { ReactElement, ChangeEvent } from "react";
import { Button, Grid } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { Link, Section, Panel } from "../components/contents";
import { StyleRules } from "@material-ui/styles/withStyles";
import { Theme } from "@material-ui/core/styles/createMuiTheme";

import * as data from "../samples/data.json";
interface PageProps {
  profile: profileType;
  contents: contents;
  styles: StyleRules<{}, string>;
}

let profileData = data.profile as profileType;
let contentsData = data.contents as contents;
let stylesData = data.styles as StyleRules<{}, string>;
export default function Page({
  profile = profileData,
  contents = contentsData,
  styles = stylesData,
}: PageProps): ReactElement {
  const [expandedPanel, setExpandedPanel] = React.useState(-1);

  const handlePanelChange =
    (panel: number) => (event: ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedPanel(isExpanded ? panel : -1);
    };

  const useStyles = makeStyles((theme: Theme) => createStyles(styles));
  const classes = useStyles();

  return (
    <div className={classes.page}>
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        spacing={1}
      >
        <Grid item>
          <img className={classes.profile} alt="profile" src={profile.image} />
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            style={{ textTransform: "lowercase" }}
            href={profile.address}
          >
            {profile.name}
          </Button>
        </Grid>
        {contents.map((content, index) => {
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
      </Grid>
    </div>
  );
}
