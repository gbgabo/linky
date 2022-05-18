import { React, Fragment } from 'react'
import { Slider, Grid } from '@material-ui/core';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

export default function ProfileStyler({profile, onChange}) {
    function valuetext(value) {
        return (`${value}%`);
    };

    return (
        <Fragment>
            <Grid container spacing={1}>
              <Grid item xs={2} style={{margin: 'auto'}}>
                <p>Shape</p>
              </Grid>
              <Grid item style={{margin: 'auto'}}>
                <CheckBoxOutlineBlankIcon/>
              </Grid>
              <Grid item xs={8} style={{margin: 'auto'}}>
                <Slider
                  defaultValue={50}
                  getAriaValueText={valuetext}
                  onChange={(e,value) => onChange('profile', {'borderRadius': `${value}%`})}
                  aria-labelledby="discrete-slider"
                  valueLabelDisplay="auto"
                  step={5}
                  marks
                  min={0}
                  max={50}
                />
              </Grid>
              <Grid item style={{margin: 'auto'}}>
                <RadioButtonUncheckedIcon/>
              </Grid>
            </Grid>
        </Fragment>
    )
}
