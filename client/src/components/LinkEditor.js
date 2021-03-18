import React from 'react'
import { TextField, Paper, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete'
import AddIcon from '@material-ui/icons/Add';

export default function LinkEditor({ links, onChange }) {

    const handleNameChange = (event, id, type) => {
        const { name, value } = event.target;
        console.log(name)
        console.log(value)
        console.log(type)
        onChange(prevState => {
          return prevState.map(link => (link._id === id ? {...link, [type]: value} : link))
        });
        console.log(links)
    };
    
    const addlink = () => {
        onChange(prevState => {
        return [...prevState, {
            _id: "6015a6a28202c53a8ac1cfb8",
            name: "",
            address: ""
            }
        ]
        });
    }
    
    const removeLink = (id) => {
        const newList = links.filter((link) => link._id !== id);
        onChange(newList);
    }
    //TOFO usar grid?
      
    return (
        <div>
            <form noValidate autoComplete="off">
                {links.map(link => (
                    <Paper elevation={3} style={{width:'500px', height:'80px', marginBottom:'10px'}} >
                        <TextField label="Name" name={link.name} variant="standard" value={link.name} onChange={(e) => handleNameChange(e, link._id, 'name')}/>
                        <TextField label="Address" variant="standard" value={link.address} onChange={(e) => handleNameChange(e, link._id, 'address')}/>
                        <IconButton aria-label="delete" onClick={() => removeLink(link._id)}>
                            <DeleteIcon />
                        </IconButton>
                    </Paper>
                    ))
                    }
                    <IconButton aria-label="add" onClick={addlink}>
                        <AddIcon/>
                    </IconButton>
            </form>
        </div>
    )
}
