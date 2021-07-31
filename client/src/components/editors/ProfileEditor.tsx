import React, { ReactElement } from "react";

import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  TextField,
  IconButton,
} from "@material-ui/core";
import { ExpandMore, AlternateEmail, AccountCircle } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    display: "flex",
    alignItems: "center",
    flexBasis: "6%",
  },
}));

interface ProfileEditorProps {
  profile: profileType;
  onChange: (profile: profileType) => void;
}

export default function ProfileEditor({
  profile,
  onChange,
}: ProfileEditorProps): ReactElement {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = React.useState(false);
  return (
    <div className={classes.root}>
      <Accordion
        elevation={3}
        expanded={isExpanded}
        onChange={() => setIsExpanded(!isExpanded)}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            <AlternateEmail />
          </Typography>
          <Typography className={classes.heading}>Profile</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container direction="row" alignItems="center" spacing={1}>
            <Grid item xs={1}>
              <IconButton>
                <AccountCircle />
              </IconButton>
            </Grid>
            <Grid item xs={5}>
              <TextField
                label="Username"
                name={profile.name}
                variant="outlined"
                value={profile.name}
                onChange={(e) => onChange({ ...profile, name: e.target.value })}
                fullWidth
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Profile URL"
                name={profile.address}
                variant="outlined"
                value={profile.address}
                onChange={(e) =>
                  onChange({ ...profile, address: e.target.value })
                }
                fullWidth
              />
            </Grid>
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
