'use client';
import React from 'react';
import {
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Stack,
    Typography
} from '@mui/material';
import Header from "@/components/Header";
import NoteCard from "@/components/NoteCard";

const Home: React.FC = () => {

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
                        NoteMaster
                    </Typography>
                    <Typography variant="h5" align="center" color="text.secondary" paragraph>
                        In this app you can create and store notes with comments.
                        {/*In this app you can create notes and share them with the community.*/}
                    </Typography>
                    <Stack
                        sx={{ pt: 4 }}
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                    >
                        <Button variant="contained" color="primary" href="/notes/user-notes">Your Notes</Button>
                        {/*<Button variant="contained" color="primary" href="/login" onClick={handleLogin}>Log in</Button>*/}
                        {/*<Button variant="outlined" href="/register">Register</Button>*/}
                    </Stack>
                </Container>
            </Box>
        </Container>
    );
};

export default Home;