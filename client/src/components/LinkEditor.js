import React from 'react'
import { TextField, Paper, IconButton, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add';
import LinkIcon from '@material-ui/icons/Link';
import '../css/App.css';

export default function LinkEditor({ links, onChange }) {

    const handleNameChange = (event, id, type) => {
        const { value } = event.target;
        onChange(prevState => {
          return prevState.map((link, index) => (index === id ? {...link, [type]: value} : link))
        });
    };
    
    const addlink = () => {
        onChange(prevState => {
        return [...prevState, {
            name: "",
            address: ""
            }
        ]
        });
    }
    
    const removeLink = (id) => {
        onChange(prevstate => {
            return prevstate.filter((link, index) => index !== id);
        });
    }
      
    return (
        <div>
            <form noValidate autoComplete="off">
                {links.map((link, index) => (
                    <Paper elevation={3} className="center">
                        <Grid container spacing={1}>
                            <Grid style={{margin: 'auto'}}>
                                <IconButton aria-label="delete" onClick={() => removeLink(index)}>
                                    <LinkIcon/>
                                </IconButton>
                            </Grid>
                            <Grid item xs={4}>
                                <TextField 
                                    label="Name" 
                                    name={link.name} 
                                    variant="outlined" 
                                    value={link.name} 
                                    onChange={(e) => handleNameChange(e, index, 'name')}
                                    fullWidth                            
                                />
                            </Grid>
                            <Grid item xs={6}>
                                <TextField
                                    label="Address"
                                    variant="outlined"
                                    value={link.address}
                                    onChange={(e) => handleNameChange(e, index, 'address')}
                                    fullWidth
                                />
                            </Grid>
                            <Grid item style={{margin: 'auto'}}>
                                <IconButton aria-label="delete" onClick={() => removeLink(index)}>
                                    <DeleteIcon/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Paper>
                    ))
                    }
                    <IconButton style={{marginTop: '20px'}} className="centered" aria-label="add" onClick={addlink}>
                        <AddIcon/>
                    </IconButton>
            </form>
        </div>
    )
}
