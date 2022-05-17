import React, { Fragment } from "react";
import { Grid, Slider } from "@material-ui/core";
import { ColorPicker } from "../pickers";

export default function PanelStyler({ panel, onChange }) {
  function valuetext(value) {
    return `${value}px`;
  }
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
        <Grid item xs={8} style={{ margin: "auto" }}>
          <Slider
            defaultValue={15}
            getAriaValueText={valuetext}
            onChange={(e, value) =>
              onChange("panel", { "--border-radius": `${value}px` })
            }
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={2}
            marks
            min={0}
            max={30}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
}
