'use client';
import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography} from '@mui/material';
import Header from "@/components/Header";
import NoteCard from "@/components/NoteCard";

const UserNotes: React.FC = () => {
    const notes = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (
        <Container>
            <Header />

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
                        Community Notes
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        Here you can find notes shared by other users.
                    </Typography>
                </Container>
            </Box>

            <Container sx={{ py: 8 }} maxWidth="md">
                {/* End hero unit */}
                <Grid container spacing={4}>
                    {notes.map((note) => (
                        <Grid item key={note} xs={12} sm={6} md={4}>
                            <NoteCard id={note} title={"Tittle"} content={"Content"} />
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Container>
    );
};

export default UserNotes;