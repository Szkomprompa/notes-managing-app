import React from 'react';
import {Container, Typography} from '@mui/material';
import CommentForm from '../../components/CommentForm';

const NotePreview: React.FC = () => {
    const handleAddComment = (comment: string) => {
        // Implement logic to add a comment to the current note
    };

    return (
        <Container>
            <Typography variant="h4">Note Preview</Typography>
            {/* Display the full note content */}
            <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...
            </Typography>
            {/* Allow adding comments using the CommentForm component */}
            <CommentForm onAddComment={handleAddComment} />
        </Container>
    );
};

export default NotePreview;
