import React, { ReactElement } from "react";
import { Button, Typography } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import PostAdd from "@material-ui/icons/PostAdd";
import { LinkEditor, PanelEditor, SectionEditor } from "..";

interface Props {
  contents: contents;
  onChange: (state: contents) => void;
}

export default function ButtonEditorSection({
  contents,
  onChange,
}: Props): ReactElement {
  const handleContentChange = (value: string, id: number, type: string) => {
    const updatedContents = contents.map((content, index) =>
      index === id ? { ...content, [type]: value } : content
    );

    onChange(updatedContents);
  };

  const addContent = (newContent: content) => {
    const updatedContents = [...contents, newContent];
    onChange(updatedContents);
  };

  const removeContent = (id: number) => {
    const updatedContents = contents.filter((content, index) => index !== id);
    onChange(updatedContents);
  };
  return (
    <div>
      <Typography variant="h5">Buttons</Typography>
      {contents.map((content, index) => {
        let Editor = LinkEditor;
        Editor = content.type === "section" ? SectionEditor : Editor;
        Editor = content.type === "panel" ? PanelEditor : Editor;

        return (
          content.type !== "icon" && (
            <Editor
              content={content}
              index={index}
              onChange={handleContentChange}
              onRemove={removeContent}
            />
          )
        );
      })}
      <div>
        <Button
          size="large"
          onClick={() =>
            addContent({
              icon: "link",
              name: "Link",
              type: "link",
              address: "",
            })
          }
          startIcon={<Add />}
        >
          Link
        </Button>
        <Button
          size="large"
          onClick={() =>
            addContent({
              icon: "label",
              name: "Section",
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
            addContent({
              icon: "info",
              name: "Panel",
              type: "panel",
              details: "Add more details here",
            })
          }
          startIcon={<PostAdd />}
        >
          Panel
        </Button>
      </div>
    </div>
  );
}
