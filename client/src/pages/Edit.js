import 'fontsource-roboto';
import React from 'react';
import { useEffect } from 'react';
import '../css/App.css';
import { makeStyles } from '@material-ui/core/styles';
import { Tab, Tabs, AppBar } from '@material-ui/core';
import { RawData } from '../links';
import { RawStyles } from '../styles';
import LinkEditor from '../components/LinkEditor';
import TabPanel from '../components/TabPanel';
import Customize from '../components/Customize';
import Page from './Page';


export default function Edit() {
  const [tab, setTab] = React.useState(0);
  const [links, setLinks] = React.useState(RawData);
  const [styles, setStyles] = React.useState(RawStyles);

  useEffect(() => {
    console.log(styles) 
  }, [styles])

  const useStyles = makeStyles((theme) => (styles));

  const handleTabChange = (event, newValue) => {
          setTab(newValue);
  };

  return (
    <div>
      <div className="split left">
        <Page style={useStyles} links={links}/>
      </div>

      <div className="split right">
        <AppBar position="static" color="default">
            <Tabs value={tab} onChange={handleTabChange} variant="fullWidth" aria-label="simple tabs example">
            <Tab label="Links" />
            <Tab label="Customize" />
            <Tab label="Themes" />
            </Tabs>
        </AppBar>
        <TabPanel value={tab} index={0}>
            <div>
                <LinkEditor links={links} onChange={setLinks}/>
            </div>
        </TabPanel>
        <TabPanel value={tab} index={1}>
            <div>
                <Customize styles={styles} onChange={setStyles}/>
            </div>   
        </TabPanel>
        <TabPanel value={tab} index={2}>
            <div>
              <p>Comming Soon...</p>
            </div>
        </TabPanel>
      </div>
    </div>
  );
}