import React, { ReactElement } from "react";
import { IconLinkEditor } from "..";
import { Button, Typography, Grid } from "@material-ui/core";
import AddCircle from "@material-ui/icons/AddCircle";

interface Props {
  contents: contents;
  onChange: (state: contents) => void;
}

export default function IconEditorSection({
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
      <Typography variant="h5">Icons</Typography>

      <Grid container direction="row">
        {contents.map((content, index) => {
          return (
            content.type === "icon" && (
              <Grid item xs={1}>
                <IconLinkEditor
                  content={content}
                  index={index}
                  onChange={handleContentChange}
                  onRemove={removeContent}
                />
              </Grid>
            )
          );
        })}
        <Button
          size="large"
          onClick={() =>
            addContent({
              icon: "link",
              name: "icon",
              type: "icon",
              address: "http://duckduckgo.com",
            })
          }
          startIcon={<AddCircle />}
        >
          Icon
        </Button>
      </Grid>
    </div>
  );
}
