import React, { Fragment, ReactElement } from "react";
import { Button } from "@material-ui/core";
import Add from "@material-ui/icons/Add";
import PlaylistAdd from "@material-ui/icons/PlaylistAdd";
import PostAdd from "@material-ui/icons/PostAdd";
import {
  LinkEditor,
  PanelEditor,
  SectionEditor,
  ProfileEditor,
} from "./editors";
import "../css/App.css";

interface ContentsProps {
  profile: profileType;
  contents: contents;
  onChange: (state: contents) => void;
  onProfileChange: (profile: profileType) => void;
}

export default function Contents({
  profile,
  contents,
  onChange,
  onProfileChange,
}: ContentsProps): ReactElement {
  const handleContentChange = (value: string, id: number, type: string) => {
    const updatedContents = contents.map((content, index) =>
      index === id ? { ...content, [type]: value } : content
    );

    onChange(updatedContents);
  };

  const addContent = (type: string, newContent: content) => {
    const updatedContents = [...contents, newContent];
    onChange(updatedContents);
  };

  const removeContent = (id: number) => {
    const updatedContents = contents.filter((content, index) => index !== id);
    onChange(updatedContents);
  };

  return (
    <Fragment>
      <ProfileEditor profile={profile} onChange={onProfileChange} />

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
