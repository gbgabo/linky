import React, { Fragment, ReactElement } from "react";
import {
  Button,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ExpandMore, AlternateEmail } from "@material-ui/icons";
import Add from "@material-ui/icons/Add";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import PostAdd from "@material-ui/icons/PostAdd";
import { LinkEditor, PanelEditor, SectionEditor } from "./editors";
import "../css/App.css";

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

interface ContentsProps {
  contents: contents;
  onChange: (state: contents) => void;
}

export default function Contents({
  contents,
  onChange,
}: ContentsProps): ReactElement {
  const classes = useStyles();
  const [isExpanded, setIsExpanded] = React.useState(false);
  const handleContentChange = (value: string, id: number, type: string) => {
    const updatedContents = contents.map((content, index) =>
      index === id ? { ...content, [type]: value } : content
    );

    onChange(updatedContents);
  };

  const addContent = (
    type: string,
    newContent: linkType | panelType | sectionType
  ) => {
    const updatedContents = [...contents, newContent];
    onChange(updatedContents);
  };

  const removeContent = (id: number) => {
    const updatedContents = contents.filter((content, index) => index !== id);
    onChange(updatedContents);
  };

  return (
    <Fragment>
      <div className={classes.root}>
        <Accordion
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
            <Typography className={classes.heading}>Profile_info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <p>menes</p>
          </AccordionDetails>
        </Accordion>
      </div>
      <form noValidate autoComplete="off">
        {contents.map((content, index) => {
          let Editor = LinkEditor;
          Editor = content.type === "section" ? SectionEditor : Editor;
          Editor = content.type === "panel" ? PanelEditor : Editor;

          return (
            <Editor
              content={content}
              index={index}
              onChange={handleContentChange}
              onRemove={removeContent}
            />
          );
        })}
        <div>
          <Button
            size="large"
            onClick={() =>
              addContent("link", {
                icon: "link",
                name: "link",
                type: "link",
                address: "http://duckduckgo.com",
              })
            }
            startIcon={<Add />}
          >
            Link
          </Button>
          <Button
            size="large"
            onClick={() =>
              addContent("section", {
                icon: "link",
                name: "section",
                type: "section",
              })
            }
            startIcon={<PlaylistAdd />}
          >
            Section
          </Button>
          <Button
            size="large"
            onClick={() =>
              addContent("panel", {
                icon: "link",
                name: "panel",
                type: "panel",
                details: "Add more details here",
              })
            }
            startIcon={<PostAdd />}
          >
            Panel
          </Button>
        </div>
      </form>
    </Fragment>
  );
}
