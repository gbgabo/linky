import React, { ReactElement } from "react";
import {
  IconButton,
  Icon,
  createStyles,
  Box,
  ClickAwayListener,
} from "@material-ui/core";
import { makeStyles, Theme } from "@material-ui/core/styles";
import LinkEditor from "./LinkEditor";

interface Props {
  content: iconType;
  index: number;
  onChange: (value: string, index: number, type: string) => void;
  onRemove: (index: number) => void;
}

export default function IconLinkEditor({
  content,
  index,
  onChange,
  onRemove,
}: Props): ReactElement {
  const [open, setOpen] = React.useState(false);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      split: {
        width: "100%",
        position: "fixed",
      },
      right: {
        right: 0,
      },
      popover: {
        position: "absolute",
        zIndex: 2,
      },
      cover: {
        position: "fixed",
        top: "0px",
        right: "0px",
        bottom: "0px",
        left: "0px",
      },
    })
  );

  const classes = useStyles();

  const toggleDisplay = () => {
    setOpen((prevState) => {
      return !prevState;
    });
  };
  return (
    <div>
      <IconButton onClick={toggleDisplay}>
        <Icon>{content.icon}</Icon>
      </IconButton>
      {/* Icon Editor */}
      {open && (
        <div className={`${classes.right} ${classes.split} ${classes.popover}`}>
          {/* <div className={classes.cover} onClick={toggleDisplay} /> */}
          <ClickAwayListener onClickAway={toggleDisplay}>
            <Box px={3}>
              <LinkEditor
                content={content}
                index={index}
                onChange={onChange}
                onRemove={onRemove}
              />
            </Box>
          </ClickAwayListener>
        </div>
      )}
    </div>
  );
}
