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
import { CSSProperties } from "@material-ui/styles/withStyles";
import { useTheme } from "../context/Theme";

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

export default function Customize(): ReactElement {
  const { theme, updateTheme } = useTheme();
  const classes = useStyles();
  const [expandedMenu, setExpandedMenu] = React.useState(-1);

  const menuList = [
    {
      title: "Buttons",
      icon: <Storage />,
      details: <ButtonStyler button={theme.button} onChange={updateTheme} />,
    },
    {
      title: "Background",
      icon: <CropOriginal />,
      details: <BackgroundStyler page={theme.page} onChange={updateTheme} />,
    },
    {
      title: "Profile",
      icon: <Person />,
      details: <ProfileStyler profile={theme.profile} onChange={updateTheme} />,
    },
    {
      title: "Section",
      icon: <Info />,
      details: <SectionStyler section={theme.section} onChange={updateTheme} />,
    },
    {
      title: "Panel",
      icon: <Storage />,
      details: <PanelStyler panel={theme.panel} onChange={updateTheme} />,
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
              onClick={() => updateTheme("button", gradientButton)}
            >
              Mermaid
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={flatButton as CSSProperties}
              onClick={() => updateTheme("button", flatButton)}
            >
              Flat
            </Button>
          </Grid>
          <Grid item>
            <Button
              style={materialButton as CSSProperties}
              onClick={() => updateTheme("button", materialButton)}
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
