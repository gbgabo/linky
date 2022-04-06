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
    flexBasis: "5%",
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
  const [expandedMenu, setExpandedMenu] = React.useState(-1);

  const menuList = [
    {
      title: "Buttons",
      icon: <Storage />,
      details: <ButtonStyler button={styles.button} onChange={handleStyle} />,
    },
    {
      title: "Background",
      icon: <CropOriginal />,
      details: <BackgroundStyler page={styles.page} onChange={handleStyle} />,
    },
    {
      title: "Profile",
      icon: <Person />,
      details: (
        <ProfileStyler profile={styles.profile} onChange={handleStyle} />
      ),
    },
    {
      title: "Section",
      icon: <Info />,
      details: (
        <SectionStyler section={styles.section} onChange={handleStyle} />
      ),
    },
    {
      title: "Panel",
      icon: <Storage />,
      details: <PanelStyler panel={styles.panel} onChange={handleStyle} />,
    },
    {
      title: "Themes",
      icon: <Palette />,
      details: (
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
              Mermaid
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
      ),
    },
  ];

  const handleAccordion =
    (panel: number) => (event: ChangeEvent<{}>, isExpanded: boolean) => {
      setExpandedMenu(isExpanded ? panel : -1);
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
      {menuList.map((menu, index) => {
        return (
          <Accordion
            expanded={expandedMenu === index}
            onChange={handleAccordion(index)}
          >
            <AccordionSummary
              expandIcon={<ExpandMore />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography className={classes.heading}>{menu.icon}</Typography>
              <Typography className={classes.heading}>{menu.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>{menu.details}</AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
