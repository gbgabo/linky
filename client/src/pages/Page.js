import 'fontsource-roboto';
import React from 'react';
import { useState } from 'react';
import profile from'../profile.png'
import '../css/App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { RawData } from '../links';


export default function Page() {
    const [buttonColor, setButtonColor] = useState('#00ffb7');
    const [backgroundColor, setBackgroundColor] = useState('#900048');
    const [textColor, setTextColor] = useState('#000000')
    const [links, setLinks] = React.useState(RawData);

    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
        root: {
            background: buttonColor,
            borderRadius: 3,
            border: 0,
            color: 'white',
            height: 48,
            padding: '0 30px',
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            marginTop: '20px',
            minWidth: '300px'
        },
        label: {
            textTransform: 'capitalize',
            color: textColor
        }
        }));

    const classes = useStyles();

    return (
        <div style={{ backgroundColor: backgroundColor}} className="App-header">
            <img style={{marginBottom: '50px', maxWidth: '300px', borderRadius: '50%'}} alt="your profile" src={profile}/>
            
            {links.map(link => (
                <Button key={link._id} classes={{root: classes.root, label: classes.label}} variant="contained" href={link.address}>
                {link.name}
                </Button>
                ))
            }
        </div>
    )
}
