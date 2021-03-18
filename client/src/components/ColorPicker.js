import { ChromePicker } from 'react-color';
import { useState } from 'react';
import { IconButton } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ClickAwayListener } from '@material-ui/core';

export default function ColorPicker({ name, input, onChange }) {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);

    const useStyles = makeStyles((theme) => ({
        color: {
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            background: `${input}`,
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

    const classes = useStyles();

    return(
        <ClickAwayListener onClickAway={() => setDisplayColorPicker(false)}>
        <div>
            <p>{name}</p>
            {/* Color Button */}
            <IconButton aria-label="delete" onClick={() => setDisplayColorPicker(!displayColorPicker)}>
                <div className={classes.color}/>
            </IconButton>
            {/* <div className={classes.swatch} onClick={() => setDisplayColorPicker(!displayColorPicker)}>
                <div className={classes.color}/>
            </div> */}
            {/* Color Picker */}
            { displayColorPicker ? (
                <div className={classes.popover}>
                    <div className={classes.cover} onClick={() => setDisplayColorPicker(false)}/>
                    <ChromePicker color={input} onChange={(color) => onChange(color.hex)} />
                </div>
            ) : null }
        </div>
        </ClickAwayListener> 
    )
}