import 'fontsource-roboto';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import profile from'../profile.png'
import '../css/App.css';
import { Button } from '@material-ui/core';
import { RawData } from '../links';
import { RawStyles } from '../styles';

const useStyles = makeStyles((theme) => (RawStyles));

export default function Page({ style = useStyles , links = RawData }) {
    const classes = style();

    return (
        <div className={classes.page}>
            <img className={classes.profile} alt="your profile" src={profile}/>
            
            {links.map(link => (
                <Button key={link._id} className={classes.button} variant="contained" href={link.address}>
                    {link.name}
                </Button>
                ))
            }
        </div>
    )
}
