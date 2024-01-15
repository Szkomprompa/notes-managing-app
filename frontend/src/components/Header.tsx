'use client';
import React from 'react';
import {AppBar, Toolbar, Typography, Button, Box, Icon} from '@mui/material';
import Link from 'next/link';
import {TextSnippet} from "@mui/icons-material";

const Header: React.FC = () => {
    const handleLogout = () => {
        // Implement logic to handle user logout (e.g., clear session, redirect to login)
        console.log('User logged out');
    };

    return (
        <AppBar position="absolute">
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center' }}>
                    <TextSnippet color="secondary"/>
                    <Typography variant="h6" color="secondary">
                        NoteMaster
                    </Typography>

                    <Link href="/notes/user-notes" passHref>
                        <Button color="secondary">Your Notes</Button>
                    </Link>

                    <Link href="/notes/community-notes" passHref>
                        <Button color="secondary">Community Notes</Button>
                    </Link>
                </Box>

                <Link href="/login" passHref>
                    <Button color="secondary" onClick={handleLogout}>
                        <Typography color="secondary">
                            Logout
                        </Typography>
                    </Button>
                </Link>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
