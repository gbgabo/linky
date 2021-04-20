import React from 'react'
import * as Icons from '@material-ui/icons'
import { Grid, Modal, IconButton, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const icons = ["GitHub", "WhatsApp", "Info", "Link", "Call", "Instagram", "AlternateEmail", "Extension", "AddCircle"]

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        borderRadius: '5px',
        width: 400,
        backgroundColor: '#f4f1de',
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: `translate(-50%, -50%)`
    },
}));

export default function IconPicker({value, onChange}) {
    const [open, setOpen] = React.useState(false);

    const classes = useStyles();

    const toggleModal = () => {
        setOpen(prevState => {
            return !prevState
        });
    }

    const DynamicIcon = Icons[value];
    const AddIcon = Icons['AddPhotoAlternate'];

    return (
        <div>
            <IconButton aria-label="icon" onClick={toggleModal}>
                { value === null ? <AddIcon/> : <DynamicIcon/>}
            </IconButton>
            <Modal open={open} onClose={toggleModal}>
                <div>
                    <Grid container spacing={2} className={classes.paper}>
                    <Grid container 
                        direction="row"
                        justify="center"
                        alignItems="center"
                        spacing={1}
                    >
                        <DynamicIcon/>
                        <Button>Remove</Button>
                    </Grid>
                        {icons.map(icon => {
                            let LinkIcon = Icons[icon]
                            return (
                                <Grid item>
                                    <IconButton onClick={() => {onChange(icon); toggleModal()}}>
                                        <LinkIcon/>
                                    </IconButton>
                                </Grid>     
                            )
                        })}
                    </Grid>
                </div>
            </Modal>
        </div>
    )
}
