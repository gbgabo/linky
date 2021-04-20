import 'fontsource-roboto';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import * as Icons from '@material-ui/icons'
import profile from'../samples/profile.png'
import '../css/App.css';
import { Button } from '@material-ui/core';
import { RawData } from '../samples/links';
import { RawStyles } from '../samples/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { ExpandMore } from '@material-ui/icons';

const useStyles = makeStyles((theme) => (RawStyles));

export default function Page({ style = useStyles , links = RawData }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const classes = style();

    return (
        <div className={classes.page}>
            <img className={classes.profile} alt="your profile" src={profile}/>
            
            {links.map((link, index) => {
                let DynamicIcon = Icons[link.icon]
                let content
                content = link.type === 'section' ? <p className={classes.section}>{link.name}</p>: content;
                content = link.type === 'panel' ? <Accordion className={classes.panel} square={false} expanded={expanded === index} onChange={handleChange(index)}>
                                                    <AccordionSummary
                                                    classes={{ root: classes.['panel-details'], content: classes.content}}
                                                    expandIcon={<ExpandMore/>}
                                                    aria-controls="panel1a-content"
                                                    id="panel1a-header"
                                                    >
                                                        <Typography className={classes.startIcon}><DynamicIcon/></Typography>
                                                        <Typography className={classes.heading}>{link.name}</Typography>
                                                    </AccordionSummary>
                                                    <AccordionDetails>
                                                        <p>{link.details}</p>
                                                    </AccordionDetails>
                                                </Accordion> : content;
                content = link.type === 'link' ? <Button key={link._id} className={classes.button} variant="contained" href={link.address} startIcon={<DynamicIcon/> }>{link.name}</Button> : content;
       
                return ( 
                    content      
                )
            })
            }
        </div>
    )
}
