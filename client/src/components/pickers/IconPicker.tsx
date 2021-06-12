import React from "react";
import { Grid, Modal, IconButton, Button, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const icons = [
  "info",
  "link",
  "call",
  "alternate_email",
  "extension",
  "add_circle",
  "add_photo_alternate",
  "qr_code",
  "add",
  "code",
];

interface IconPickerProps {
  value: string;
  onChange: (state: string) => void;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    borderRadius: "5px",
    width: 400,
    backgroundColor: "#f4f1de",
    padding: theme.spacing(2, 4, 3),
    top: "50%",
    left: "50%",
    transform: `translate(-50%, -50%)`,
  },
}));

export default function IconPicker({ value, onChange }: IconPickerProps) {
  const [open, setOpen] = React.useState(false);

  const classes = useStyles();

  const toggleModal = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };

  const DynamicIcon = value === "none" ? "add_photo_alternate" : value;

  return (
    <div>
      <IconButton aria-label="icon" onClick={toggleModal}>
        <Icon>{DynamicIcon}</Icon>
      </IconButton>
      <Modal open={open} onClose={toggleModal}>
        <div>
          <Grid container spacing={2} className={classes.paper}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              spacing={1}
            >
              <Icon>{DynamicIcon}</Icon>
              <Button
                onClick={() => {
                  onChange("none");
                  toggleModal();
                }}
              >
                Remove
              </Button>
            </Grid>
            {icons.map((icon) => {
              // let ContentIcon = value;
              return (
                <Grid item>
                  <IconButton
                    onClick={() => {
                      onChange(icon);
                      toggleModal();
                    }}
                  >
                    <Icon>{icon}</Icon>
                  </IconButton>
                </Grid>
              );
            })}
          </Grid>
        </div>
      </Modal>
    </div>
  );
}
