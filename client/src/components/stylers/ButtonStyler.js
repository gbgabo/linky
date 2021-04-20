import { React, Fragment } from 'react'
import { Slider, Grid } from '@material-ui/core';
import { ColorPicker } from '../pickers';
import { RadioButtonUnchecked, CheckBoxOutlineBlank } from '@material-ui/icons';

export default function ButtonStyler({button, onChange}) {
    function valuetext(value) {
        return (`${value}%`);
    };

    return (
        <Fragment>
            <Grid container spacing={1}>
                <Grid item>
                    <ColorPicker
                        label="Color"
                        value={button.background}
                        onChange={(value) => onChange('button', {"background": value})}
                    />
                </Grid>
                <Grid item style={{margin: 'auto'}}>
                    <p>Shape</p>
                </Grid>
                <Grid item style={{margin: 'auto'}}>
                    <CheckBoxOutlineBlank/>
                </Grid>
                <Grid item xs={4} style={{margin: 'auto'}}>
                <Slider
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    onChange={(e,value) => onChange('button', {'borderRadius': value})}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={2}
                    marks
                    min={0}
                    max={30}
                />
                </Grid>
                <Grid item style={{margin: 'auto'}}>
                    <RadioButtonUnchecked/>
                </Grid>
                <Grid item>
                    <ColorPicker 
                    label="Text color"
                    value={button.color}
                    onChange={(value) => onChange('button', {'color': value})}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}
