import {Box, Button, Modal, Paper, TextField, Typography} from "@mui/material";
import React, {useState} from "react";

const NoteForm = (props: {open: boolean, onClose: Function} ) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleAddNote = () => {
        // Implement logic to add the new note (e.g., make an API call to your backend)
        console.log('Adding note:', {title, content});
        // Reset the form fields after adding the note
        setTitle('');
        setContent('');
        // Close the modal after adding the note
        props.onClose();
    };

    return (
        <Modal {...props}>
            <Box sx={{position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'}}>
                <Paper elevation={3} sx={{padding: 2, maxWidth: 400}}>
                    <Typography variant="h6" mb={2}>
                        Add New Note
                    </Typography>

                    {/* Note Title */}
                    <TextField
                        label="Title"
                        variant="outlined"
                        fullWidth
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        margin="normal"
                    />

                    {/* Note Content */}
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

                    {/* Add Note Button */}
                    <Button variant="contained" color="primary" onClick={handleAddNote}>
                        Add Note
                    </Button>
                </Paper>
            </Box>
        </Modal>
    );
};

export default NoteForm;