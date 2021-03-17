import 'fontsource-roboto';
import React from 'react';
import { useState } from 'react';
import profile from'./profile.png'
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Tab, Tabs, AppBar, TextField, Paper } from '@material-ui/core';
import { RawData } from './links';
import ColorPicker from './ColorPicker';
import TabPanel from './TabPanel';

function Edit() {
  const [buttonColor, setButtonColor] = useState('#00ffb7');
  const [backgroundColor, setBackgroundColor] = useState('#900048');
  const [textColor, setTextColor] = useState('#000000')
  const [value, setValue] = React.useState(0);
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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleNameChange = (event, linkId, type) => {
    const { name, value } = event.target;
    // const { linkId } = props;
    console.log(name)
    console.log(value)
    console.log(linkId)
    console.log(type)
    setLinks(prevState => {
      return prevState.map(link => (link._id === linkId ? {...link, [type]: value} : link))
      // links: [ ...prevState, [name]: value ]
    });
    console.log(links)
  };

  return (
    <div>
      <div style={{backgroundColor: backgroundColor}} className="split left">
        <div className="centered">
          <img style={{marginBottom: '50px', maxWidth: '300px', borderRadius: '50%'}} alt="your profile" src={profile}/>
          
          {links.map(link => (
            <Button key={link._id} classes={{root: classes.root, label: classes.label}} variant="contained" href={link.address}>
            {link.name}
            </Button>
            ))
          }
        </div>
      </div>

      <div className="split right">
      <AppBar position="static" color="default">
        <Tabs value={value} onChange={handleChange} variant="fullWidth" aria-label="simple tabs example">
          <Tab label="Links" />
          <Tab label="Appearance"  />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <form className="centered" noValidate autoComplete="off">
            {links.map(link => (
              <Paper>
                <TextField label="Name" name={link.name} variant="standard" value={link.name} onChange={(e) => handleNameChange(e, link._id, 'name')}/>
                <TextField label="Address" variant="standard" value={link.address} onChange={(e) => handleNameChange(e, link._id, 'address')}/>
              </Paper>
              ))
              
            }
        </form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="centered">
            <ColorPicker name="Cor do Botao" input={buttonColor} onChange={setButtonColor}/>
            <ColorPicker name="Cor do Fundo" input={backgroundColor} onChange={setBackgroundColor}/>
            <ColorPicker name="Cor do Text" input={textColor} onChange={setTextColor}/>
        </div>   
      </TabPanel>
      </div>
    </div>
  );
}

export default Edit;
