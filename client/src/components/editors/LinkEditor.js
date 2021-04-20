import React from 'react'
import { TextField, Paper, IconButton, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import { IconPicker } from '../pickers';

export default function LinkEditor({link, index, onChange, onRemove}) {

    return (
        <div>
            <Paper elevation={3} className="center">
                <Grid 
                    container 
                    direction="row"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item xs={1}> 
                        <IconPicker value={link.icon} onChange={(icon) => onChange(icon, index, 'icon')}/>
                    </Grid>
                    <Grid item xs={4}>
                        <TextField 
                            label="Name" 
                            name={link.name} 
                            variant="outlined" 
                            value={link.name} 
                            onChange={(e) => onChange(e.target.value, index, 'name')}
                            fullWidth                            
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            label="Address"
                            variant="outlined"
                            value={link.address}
                            onChange={(e) => onChange(e.target.value, index, 'address')}
                            fullWidth
                        />
                    </Grid>
                    <Grid item xs={1}>
                        <IconButton aria-label="delete" onClick={() => onRemove(index)}>
                            <DeleteIcon/>
                        </IconButton>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
