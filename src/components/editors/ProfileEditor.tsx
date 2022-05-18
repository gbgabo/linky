import React, { ReactElement } from "react";

import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  TextField,
  Switch,
  Button,
  Box,
} from "@material-ui/core";
import { AlternateEmail, AccountCircle } from "@material-ui/icons";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
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
    flexBasis: "35px",
  },
  button: {
    height: "56px",
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
  return (
    <Box p={1}>
      <Typography variant="h5">Header</Typography>
      <Grid container spacing={2} alignItems="stretch">
        <Grid item xs={3}>
          <Accordion elevation={2} expanded={profile.display}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Switch
                checked={profile.display}
                onChange={(e) =>
                  onChange({ ...profile, display: e.target.checked })
                }
              />
              <Typography className={classes.heading}>
                <AccountCircle />
              </Typography>
              <Typography className={classes.heading}>Picture</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Button
                variant="contained"
                fullWidth
                className={classes.button}
                color="primary"
                size="large"
                startIcon={<CloudUploadIcon />}
              >
                Upload
              </Button>
            </AccordionDetails>
          </Accordion>
        </Grid>
        <Grid item xs={9}>
          <Accordion elevation={2} expanded={profile.displayName}>
            <AccordionSummary
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Switch
                checked={profile.displayName}
                onChange={(e) =>
                  onChange({ ...profile, displayName: e.target.checked })
                }
              />
              <Typography className={classes.heading}>
                <AlternateEmail />
              </Typography>
              <Typography className={classes.heading}>Nickname</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Grid container direction="row" alignItems="center" spacing={1}>
                <Grid item xs={4}>
                  <TextField
                    label="Username"
                    name={profile.name}
                    variant="outlined"
                    value={profile.name}
                    onChange={(e) =>
                      onChange({ ...profile, name: e.target.value })
                    }
                    fullWidth
                  />
                </Grid>
                <Grid item xs={8}>
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
        </Grid>
      </Grid>
    </Box>
  );
}
