import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Modal,
    Paper,
    TextField,
    Typography
} from "@mui/material";
import React, {useState} from "react";
import {createNote} from "@/services/noteService";
import {NoteDtoWithoutId} from "@/types/note/noteTypes";


const NoteForm = (props: {open: boolean, onClose: () => void} ) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddNote = () => {
        console.log('Adding note:', {title, content});

        const note: NoteDtoWithoutId = {
            title: title,
            content: content,
        }

        createNote(note)
            .then((createdNote) => console.log('Created Note:', createdNote))
            .catch((error) => console.error('Error creating note:', error));

        setTitle('');
        setContent('');

        props.onClose();
    };



    return (
        <Dialog open={props.open} onClose={props.onClose} maxWidth="md" fullWidth>
            <DialogTitle>Add New Note</DialogTitle>
            <DialogContent>
                <TextField
                    label="Title"
                    variant="outlined"
                    fullWidth
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    margin="normal"
                />

                <TextField
                    label="Content"
                    variant="outlined"
                    multiline
                    rows={4}
                    fullWidth
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    margin="normal"
                />
            </DialogContent>
            <DialogActions>
                <Button variant="contained" color="primary" onClick={handleAddNote}>
                    Add Note
                </Button>
                <Button variant="contained" color="primary" onClick={props.onClose}>
                    Cancel
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NoteForm;