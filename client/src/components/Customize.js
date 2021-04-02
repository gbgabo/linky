import React from 'react'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { Slider, Grid } from '@material-ui/core';
import ColorPicker from '../components/ColorPicker';

export default function Customize({ styles, onChange }) {

  function handleStyle(selector, property, value){
    onChange(prevState => {
      return ({...prevState, [selector]:{...prevState[selector], [property]: value}})
    });
  }

  function handleBackgroundChange(value){
    console.log(`No customize: ${value}`)
    let backgroundStyle
    (typeof value === 'string' 
    ? backgroundStyle = '--bg-colors'
    : backgroundStyle = 'linear-gradient(var(--gradient-angle), var(--bg-colors))'
    )
    onChange(prevState => {
      return ({...prevState, page:{...prevState.page, '--bg-colors': value, background: backgroundStyle} })
    })
    
  };

  function valuetext(value) {
    return (`${value}%`);
  };

    return (
        <div>
            <Grid container spacing={1}>
              <Grid item xs={1}>
                <ColorPicker
                  name="Button color"
                  input={styles.button.background}
                  onChange={(value) => handleStyle('button', 'background', value)}
                />
              </Grid>
            
              {/* <Grid item xs={1}> */}
                <ColorPicker 
                  name="Gradient"
                  input={styles.page['--bg-colors']}
                  onChange={handleBackgroundChange}
                />
                <Slider
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    onChange={(e,value) => handleStyle('page', '--gradient-angle', `${value}deg`)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={0}
                    max={360}
                />
              {/* </Grid> */}
            
              <Grid item xs={1}>
                <ColorPicker 
                  name="Text color"
                  input={styles.button.color}
                  onChange={(value) => handleStyle('button', 'color', value)}
                />
              </Grid>

              <Grid container spacing={1}>
                <Grid item xs={2} style={{margin: 'auto'}}>
                  <p>Profile Shape</p>
                </Grid>
                <Grid item style={{margin: 'auto'}}>
                  <CheckBoxOutlineBlankIcon/>
                </Grid>
                <Grid item xs={8} style={{margin: 'auto'}}>
                  <Slider
                    defaultValue={50}
                    getAriaValueText={valuetext}
                    onChange={(e,value) => handleStyle('profile', 'borderRadius', `${value}%`)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={0}
                    max={50}
                  />
                </Grid>
                <Grid item style={{margin: 'auto'}}>
                  <RadioButtonUncheckedIcon/>
                </Grid>
              </Grid>
              <Grid container spacing={1}>
                <Grid item xs={2} style={{margin: 'auto'}}>
                  <p>Button Shape</p>
                </Grid>
                <Grid item style={{margin: 'auto'}}>
                  <CheckBoxOutlineBlankIcon/>
                </Grid>
                <Grid item xs={8} style={{margin: 'auto'}}>
                  <Slider
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    onChange={(e,value) => handleStyle('button', 'borderRadius', value)}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={2}
                    marks
                    min={0}
                    max={30}
                  />
                </Grid>
                <Grid item style={{margin: 'auto'}}>
                  <RadioButtonUncheckedIcon/>
                </Grid>
              </Grid>
              </Grid>
        </div>
    )
}
