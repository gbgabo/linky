import React from 'react'
import { Button } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import PostAdd from '@material-ui/icons/PostAdd';
import { LinkEditor, PanelEditor, SectionEditor } from './editors';
import '../css/App.css';

export default function Contents({ contents, onChange }) {

    const handleContentChange = (value, id, type) => {
        onChange(prevState => {
          return prevState.map((content, index) => (index === id ? {...content, [type]: value} : content))
        });
    };

    const addContent = (type) => {
        onChange(prevState => {
        return [...prevState, {
            icon: "Link",
            name: type,
            type: type,
            address: "",
            }
        ]
        });
    }
    
    const removeContent = (id) => {
        onChange(prevstate => {
            return prevstate.filter((content, index) => index !== id);
        });
    }
      
    return (
        <div>
            <form noValidate autoComplete="off">
                {contents.map((content, index) => {
                    let Editor
                    Editor = content.type === 'section' ? SectionEditor: Editor;
                    Editor = content.type === 'panel' ? PanelEditor : Editor;
                    Editor = content.type === 'link' ? LinkEditor : Editor;

                    return (
                        <Editor content={content} index={index} onChange={handleContentChange} onRemove={removeContent}/>
                    )}
                )}
                <div>
                    {/*
                    <IconButton aria-label="add" onClick={() => addContent('link')}>
                        <Add/>
                    </IconButton>
                    <IconButton aria-label="addSection" onClick={() => addContent('section')}>
                        <PlaylistAdd/>
                    </IconButton>
                    <IconButton aria-label="addSection" onClick={() => addContent('panel')}>
                        <PostAdd/>
                    </IconButton>*/}
                    <Button size='large' onClick={() => addContent('link')} startIcon={<Add/>}>
                        Link
                    </Button>
                    <Button size='large' onClick={() => addContent('section')} startIcon={<PlaylistAdd/>}>
                        Section
                    </Button>
                    <Button size='large' onClick={() => addContent('panel')} startIcon={<PostAdd/>}>
                        Panel
                    </Button> 
                </div>
            </form>
        </div>
    )
}
