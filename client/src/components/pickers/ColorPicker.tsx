import { ChromePicker } from 'react-color';
import { useState, useEffect } from 'react';
import { IconButton, Grid, Button, createStyles } from '@material-ui/core';
import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';

interface ColorPickerProps {
    label: string;
    addLabel?: string;
    value: string | string[];
    onChange: (state: string | string[]) => void;
}

export default function ColorPicker({ label, addLabel, value, onChange }: ColorPickerProps) {
    const [displays, setDisplays] = useState((typeof value === 'string' ? [false] : value.map(() => {return false}) ));
    const [colors, setColors] = useState((typeof value === 'string' ? value.split(",") : value));

    useEffect(() => {
        console.log(`No picker: ${colors}`);
        console.log(`Displays: ${displays}`);
    }, [colors, displays])

    const useStyles = makeStyles((theme: Theme) => createStyles({
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
            zIndex: 2,
        },
        cover: {
            position: 'fixed',
            top: '0px',
            right: '0px',
            bottom: '0px',
            left: '0px',
        },
    }));

    const classes = useStyles();

    const updateColors = (newColor: string, position: number) => {
        setColors(prevState => {
            return prevState.map((color, index) => (index === position ? newColor : color ));
        });
        (typeof value === 'string'
        ? onChange(newColor)
        : setColors((state) => {
            onChange(state);
            return state;
        })
        )
    };

    const toggleDisplay = (position: number) => {
        setDisplays(prevState => {
            return prevState.map((display: boolean, index: number) => (index === position ? !display : display ));
        });
    }

    const addColor = () => {
        setColors(prevState => {
            return [...prevState, "#240041"]
        });
        setDisplays(prevState => {
            return [...prevState, false]
        });
        setColors((state) => {
            onChange(state);
            return state;
        })
       
    };

    const removeColor = (position: number) => {
        setColors(prevstate => {
            return prevstate.filter((color, index) => index !== position);
        });
        setDisplays(prevstate => {
            return prevstate.filter((display, index) => index !== position);
        });
        setColors((state) => {
            onChange(state);
            return state;
        })
    }

    return (
        <Grid
            container 
            direction="row"
            alignItems="center"
            spacing={1}
        >
            <Grid item>
                <p>{label}</p>
            </Grid>
            {colors.map((color, index) => (
            <div>
                <Grid item>
                    {/* <ClickAwayListener onClickAway={() => toggleDisplay(index)}> */}
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
                    {/* </ClickAwayListener> */}
                </Grid>
                {index > 0 && (
                <Grid item>
                    <IconButton aria-label="delete" onClick={() => removeColor(index)}>
                        <ClearIcon/>
                    </IconButton>
                </Grid>
                ) }
            </div>
            ))}
            { typeof value !== 'string' && (
            <Grid item>
                <Button aria-label="add" onClick={addColor}>
                    { colors.length === 1 ? addLabel : <AddIcon/> }
                </Button>  
            </Grid>
            )}
            
        </Grid>
    )
}