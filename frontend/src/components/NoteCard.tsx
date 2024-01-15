import React, {useState} from 'react';
import {Card, CardContent, Typography, Button, CardActions, Box} from '@mui/material';
import Link from 'next/link';
import {NoteDto} from "@/types/note/noteTypes";
import NoteForm from "@/components/NoteForm";
import NoteDetails from "@/components/NoteDetails";
import {deleteNote} from "@/services/noteService";

const NoteCard: React.FC<NoteDto> = (note) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleOpenNoteDetails = () => {
        setIsDialogOpen(true);
    };

    const handleCloseNoteDetails = () => {
        setIsDialogOpen(false);
    };

    const handleDeleteNote = () => {
        deleteNote(note.id!)
            .then(() => console.log('Deleted note:', note.id))
            .catch((error) => console.error('Error deleting note:', error));
    }

    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {note.title}
                </Typography>
                <Typography>
                    {note.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Box sx={{pt: 4}}>
                    <Button onClick={handleOpenNoteDetails}>View</Button>
                    <Button onClick={handleDeleteNote}>Delete</Button>
                    <NoteDetails id={note.id!} open={isDialogOpen} onClose={handleCloseNoteDetails}/>
                </Box>
            </CardActions>
        </Card>
    );
};

export default NoteCard;
