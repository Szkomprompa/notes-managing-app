'use client';
import React, {useEffect, useState} from 'react';
import {
    Box,
    Button,
    CircularProgress,
    Container,
    Grid,
    Typography
} from '@mui/material';
import Header from "@/components/Header";
import NoteCard from "@/components/NoteCard";
import NoteForm from "@/components/NoteForm";
import {NoteDto} from "@/types/note/noteTypes";
import {getNotes} from "@/services/noteService";

const UserNotes: React.FC = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [notes, setNotes] = useState<NoteDto[] | null>(null);

    const handleOpenNoteModal = () => {
        setModalOpen(true);
    };

    const handleCloseNoteModal = () => {
        setModalOpen(false);
    };

    useEffect(() => {
        let timeout = setTimeout(() => {
            getNotes()
                .then((notes) => {
                    setNotes(notes);
                    console.log('All Notes:', notes)
                }).catch((error) => {
                console.error('Error fetching notes:', error);
            });
        }, 500);

        return () => clearTimeout(timeout);
    }, [isModalOpen]);

    return (
        <Container>
            <Header/>

            <Box sx={{
                bgcolor: 'background.paper',
                pt: 14,
                pb: 6,
                textAlign: 'center',
            }}>
                <Container maxWidth="sm">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Your Notes
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Here you can find your notes.
                    </Typography>
                    <Box sx={{pt: 4}}>
                        <Button variant="contained" onClick={handleOpenNoteModal}>Add Note</Button>
                        <NoteForm open={isModalOpen} onClose={handleCloseNoteModal}/>
                    </Box>
                </Container>
            </Box>

            <Container sx={{py: 8}} maxWidth="md">
                {notes ? (
                    <Grid container spacing={4}>
                        {notes.map((note) => (
                            <Grid item key={note.id} xs={12} sm={6} md={4}>
                                <NoteCard {...note} />
                            </Grid>
                        ))}
                    </Grid>
                ) : (
                    <Box sx={{pt: 8, pb: 6, display: 'flex', justifyContent: 'center'}}>
                        <CircularProgress/>
                    </Box>
                )}
            </Container>
        </Container>
    );
};

export default UserNotes;