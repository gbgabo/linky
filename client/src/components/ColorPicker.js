import { ChromePicker } from 'react-color';
import { useState } from 'react';
import { IconButton, Grid, Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ClickAwayListener } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

export default function ColorPicker({ name, input, onChange }) {
    // input = 
    const [displays, setDisplays] = useState((typeof input === 'string' ? [false]: []));
    const [colors, setColors] = useState((typeof input === 'string' ? input.split(",") : input));

    const useStyles = makeStyles((theme) => ({
        color: {
            width: '30px',
            height: '30px',
            borderRadius: '50%',
        },
        swatch: {
            padding: '5px',
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '0 0 0 2px rgba(0,0,0,.1)',
            display: 'inline-block',
            cursor: 'pointer',
        },
        popover: {
            position: 'absolute',
            zIndex: '2',
        },
        cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        },
    }));

    const updateColors = (newColor, position) => {
        setColors(prevState => {
            return prevState.map((color, index) => (index === position ? newColor : color ));
        });
        (typeof input === 'string'
        ? onChange(newColor)
        : onChange(prevState => {
            return prevState.map((color, index) => (index === position ? newColor : color ));
        })
        )
    };

    const toggleDisplay = (position) => {
        setDisplays(prevState => {
            return prevState.map((display, index) => (index === position ? !display : display ));
        });
    }

    const addColor = () => {
        setColors(prevState => {
            return [...prevState, "#240041"]
        });
        setDisplays(prevState => {
            return [...prevState, false]
        });
        onChange(prevState => {
            return [...prevState, "#240041"]
        });
    };

    const removeColor = (position) => {
        setColors(prevstate => {
            return prevstate.filter((color, index) => index !== position);
        });
        setDisplays(prevstate => {
            return prevstate.filter((display, index) => index !== position);
        });
        onChange(prevstate => {
            return prevstate.filter((color, index) => index !== position);
        });
    }

    const classes = useStyles();

    return (
        <Grid container spacing={1}>
            {colors.map((color, index) => (
            <div>
                {/* <ClickAwayListener onClickAway={() => toggleDisplay(index)}> */}
                <Grid item>
                    
                        {/* Color Button */}
                        <IconButton aria-label="color" onClick={() => toggleDisplay(index)}>
                            <div className={classes.color} style={{background: color}}/>
                        </IconButton>
                        {/* Color Picker */}
                        { displays[index] ? (
                            <div className={classes.popover}>
                                <div className={classes.cover} onClick={() => toggleDisplay(index)}/>
                                <ChromePicker color={color} onChange={(color) => updateColors(color.hex, index)} />
                            </div>
                        ) : null }
                    
                </Grid>
                {/* </ClickAwayListener> */}
                {index > 0 && (
                <Grid item>
                    <IconButton aria-label="delete" onClick={() => removeColor(index)}>
                        <ClearIcon/>
                    </IconButton>
                </Grid>
                ) }
            </div>
            ))}
            { typeof input !== 'string' && (
            <Grid item>
                <Button aria-label="add" onClick={addColor}>
                    { colors.length === 1 ? name : <AddIcon/> }
                </Button>  
            </Grid>
            )}
            
        </Grid>
    )
}