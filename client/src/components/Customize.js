import React from 'react'
import { gradientButton, flatButton, materialButton } from '../samples/templates';
import { Grid, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import { ExpandMore, Person, Palette, Storage, CropOriginal, Info } from '@material-ui/icons';
import { SectionStyler, ButtonStyler, BackgroundStyler, ProfileStyler } from './stylers';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    flexBasis: '6%'
  },
}));

export default function Customize({ styles, onChange }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function handleStyle(selector, rules){
    onChange(prevState => {
      return ({...prevState, [selector]:{...prevState[selector], ...rules}})
    });
  }

  return (
    <div className={classes.root}>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}><Storage/></Typography>
          <Typography className={classes.heading}>Buttons</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ButtonStyler button={styles.button} onChange={handleStyle}/>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><CropOriginal/></Typography>
          <Typography className={classes.heading}>Background</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BackgroundStyler page={styles.page} onChange={handleStyle}/>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><Person/></Typography>
          <Typography className={classes.heading}>Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ProfileStyler onChange={handleStyle}/>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><Info/></Typography>
          <Typography className={classes.heading}>Section</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SectionStyler section={styles.section} onChange={handleStyle}/>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}><Palette/></Typography>
          <Typography className={classes.heading}>Themes</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid 
            container 
            direction="row"
            justify="center"
            alignItems="center"
            spacing={1}
          >
              <Grid item><Button style={gradientButton} onClick={() => handleStyle('button', gradientButton)}>Sereia</Button></Grid>
              <Grid item><Button style={flatButton} onClick={() => handleStyle('button', flatButton)}>Flat</Button></Grid>
              <Grid item><Button style={materialButton} onClick={() => handleStyle('button', materialButton)}>Material</Button></Grid>
              
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
