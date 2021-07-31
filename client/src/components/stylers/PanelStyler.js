import React, { Fragment } from "react";
import { Grid } from "@material-ui/core";
import { ColorPicker } from "../pickers";

export default function PanelStyler({ panel, onChange }) {
  return (
    <Fragment>
      <Grid container spacing={1}>
        <Grid item xs={2}>
          <ColorPicker
            label="Content Background"
            value={panel.background}
            onChange={(value) => {
              onChange("panel", { background: value });
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <ColorPicker
            label="Content Text Color"
            value={panel.color}
            onChange={(value) => {
              onChange("panel", { color: value });
            }}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}
