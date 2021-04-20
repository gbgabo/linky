import React from 'react'
import { IconButton, Button } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import PlaylistAdd from '@material-ui/icons/PlaylistAdd';
import PostAdd from '@material-ui/icons/PostAdd';
import { LinkEditor, PanelEditor, SectionEditor } from './editors';
import '../css/App.css';

export default function Contents({ links, onChange }) {

    const handleContentChange = (value, id, type) => {
        onChange(prevState => {
          return prevState.map((link, index) => (index === id ? {...link, [type]: value} : link))
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
            return prevstate.filter((link, index) => index !== id);
        });
    }
      
    return (
        <div>
            <form noValidate autoComplete="off">
                {links.map((link, index) => {
                    let Editor
                    Editor = link.type === 'section' ? SectionEditor: Editor;
                    Editor = link.type === 'panel' ? PanelEditor : Editor;
                    Editor = link.type === 'link' ? LinkEditor : Editor;

                    return (
                        <Editor link={link} index={index} onChange={handleContentChange} onRemove={removeContent}/>
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
