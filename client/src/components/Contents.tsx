import React, { ReactElement } from "react";
import { Button } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import PostAdd from "@material-ui/icons/PostAdd";
import { LinkEditor, PanelEditor, SectionEditor } from "./editors";
import "../css/App.css";

type linkType = {
  icon: string;
  name: string;
  type: "link";
  address: string;
};

type panelType = {
  icon: string;
  name: string;
  type: "panel";
  details: string;
};

type sectionType = {
  icon: string;
  name: string;
  type: "section";
};

type contents = Array<linkType | panelType | sectionType>;

interface ContentsProps {
  contents: contents;
  onChange: (state: contents) => void;
}

export default function Contents({
  contents,
  onChange,
}: ContentsProps): ReactElement {
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
    <div>
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
                address: "duckduckgo.com",
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
    </div>
  );
}
