import React from 'react';
import {Card, CardContent, Typography, Button, CardActions} from '@mui/material';
import Link from 'next/link';

interface NoteCardProps {
    id: number;
    title: string;
    content: string;
}

const NoteCard: React.FC<NoteCardProps> = ({ id, title, content }) => {
    return (
        <Card
            sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        >
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                    {title}
                </Typography>
                <Typography>
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Link href={`/notes/${id}`}>
                    <Button size="small">View</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default NoteCard;
