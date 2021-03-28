import React from 'react'
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import { Slider, Grid } from '@material-ui/core';
import ColorPicker from '../components/ColorPicker';

export default function Customize({ styles, onChange }) {

  const handleProfileChange = (event, value) => {
    onChange(prevState => {
      return ({...prevState, profile:{...prevState.profile, borderRadius: `${value}%`}})
    });
  };

  const handleButtonChange = (event, value) => {
    onChange(prevState => {
      return ({...prevState, button:{...prevState.button, borderRadius: value}})
    });
  };

  // const handleGradientChange = (event, value) => {
  //     setGradientAngle(`${value}deg`);
  //     console.log(gradientAngle)
  // };

  function valuetext(value) {
  return (`${value}%`);
  };

    return (
        <div>
            <Grid container spacing={1}>
              {/* <Grid item xs={1}>
                <ColorPicker
                  name="Button color"
                  input={styles.button.background}
                  onChange={setButtonColor}
                />
              </Grid> */}
            
              {/* <Grid item xs={1}> */}
                {/* <ColorPicker 
                  name="Gradient"
                  input={backgroundColors}
                  onChange={setBackgroundColors}
                />
                <Slider
                    defaultValue={30}
                    getAriaValueText={valuetext}
                    onChange={handleGradientChange}
                    aria-labelledby="discrete-slider"
                    valueLabelDisplay="auto"
                    step={5}
                    marks
                    min={0}
                    max={360}
                /> */}
              {/* </Grid> */}
            
              {/* <Grid item xs={1}>
                <ColorPicker 
                  name="Text color"
                  input={textColor}
                  onChange={setTextColor}
                />
              </Grid> */}

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
                    onChange={handleProfileChange}
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
                    onChange={handleButtonChange}
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
