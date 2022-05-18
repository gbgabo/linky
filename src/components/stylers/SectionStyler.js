import { React, Fragment } from 'react'
import { Grid } from '@material-ui/core';
import { ColorPicker } from '../pickers';

export default function SectionStyler({section, onChange}) {

    return (
        <Fragment>
            <Grid container spacing={1}>
                <Grid item>
                    <ColorPicker
                        label="Color"
                        value={section.color}
                        onChange={(value) => onChange('section', {"color": value})}
                    />
                </Grid>
            </Grid>
        </Fragment>
    )
}
