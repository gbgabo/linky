import { Grid, Button } from "@material-ui/core";
import { ClassNameMap } from "@material-ui/styles";
import React, { Fragment, ReactElement } from "react";

interface ProfileProps {
  content: profileType;
  classes: ClassNameMap<any>;
}

export default function Profile({
  content,
  classes,
}: ProfileProps): ReactElement {
  return (
    <Fragment>
      {content.display && (
        <Grid item>
          <img className={classes.profile} alt="profile" src={content.image} />
        </Grid>
      )}

      {content.displayName && (
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            style={{ textTransform: "lowercase" }}
            href={content.address}
          >
            {content.name}
          </Button>
        </Grid>
      )}
    </Fragment>
  );
}
