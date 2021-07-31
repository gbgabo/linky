import React, { ReactElement, ChangeEvent } from "react";
import {
  gradientButton,
  flatButton,
  materialButton,
} from "../samples/templates.json";
import {
  Grid,
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  ExpandMore,
  Person,
  Palette,
  Storage,
  CropOriginal,
  Info,
} from "@material-ui/icons";
import {
  SectionStyler,
  ButtonStyler,
  BackgroundStyler,
  ProfileStyler,
  PanelStyler,
} from "./stylers";
import { CSSProperties, StyleRules } from "@material-ui/styles/withStyles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    display: "flex",
    alignItems: "center",
    flexBasis: "10%",
  },
}));

type styles = StyleRules<{}, string>;

interface CustomizeProps {
  styles: styles;
  onChange: (state: styles) => void;
}

export default function Customize({
  styles,
  onChange,
}: CustomizeProps): ReactElement {
  const classes = useStyles();
  const [expandedMenu, setExpandedMenu] = React.useState(0);

  const handleChange =
    (panel: number) => (event: ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedMenu(isExpanded ? panel : 0);
    };

  function handleStyle(selector: string, rules = {}) {
    const updatedStyles = {
      ...styles,
      [selector]: { ...styles[selector], ...rules },
    };
    onChange(updatedStyles);
  }

  return (
    <div className={classes.root}>
      <Accordion expanded={expandedMenu === 1} onChange={handleChange(1)}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <Storage />
          </Typography>
          <Typography className={classes.heading}>Buttons</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ButtonStyler button={styles.button} onChange={handleStyle} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedMenu === 2} onChange={handleChange(2)}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            <CropOriginal />
          </Typography>
          <Typography className={classes.heading}>Background</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <BackgroundStyler page={styles.page} onChange={handleStyle} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedMenu === 3} onChange={handleChange(3)}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            <Person />
          </Typography>
          <Typography className={classes.heading}>Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ProfileStyler profile={styles.profile} onChange={handleStyle} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedMenu === 4} onChange={handleChange(4)}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            <Info />
          </Typography>
          <Typography className={classes.heading}>Section</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SectionStyler section={styles.section} onChange={handleStyle} />
        </AccordionDetails>
      </Accordion>

      <Accordion expanded={expandedMenu === 5} onChange={handleChange(5)}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <Storage />
          </Typography>
          <Typography className={classes.heading}>Panel</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <PanelStyler panel={styles.panel} onChange={handleStyle} />
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expandedMenu === 6} onChange={handleChange(6)}>
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>
            <Palette />
          </Typography>
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
            <Grid item>
              <Button
                style={gradientButton as CSSProperties}
                onClick={() => handleStyle("button", gradientButton)}
              >
                Sereia
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={flatButton as CSSProperties}
                onClick={() => handleStyle("button", flatButton)}
              >
                Flat
              </Button>
            </Grid>
            <Grid item>
              <Button
                style={materialButton as CSSProperties}
                onClick={() => handleStyle("button", materialButton)}
              >
                Material
              </Button>
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
