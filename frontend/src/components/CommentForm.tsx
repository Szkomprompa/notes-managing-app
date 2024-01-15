import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface CommentFormProps {
    onAddComment: (comment: string) => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ onAddComment }) => {
    const [comment, setComment] = useState('');

    const handleAddComment = () => {
        if (comment.trim() !== '') {
            onAddComment(comment);
            setComment('');
        }
    };

    return (
        <Box mt={2}>
            <TextField
                label="Add a Comment"
                variant="outlined"
                fullWidth
                value={comment}
                onChange={(e) => setComment(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleAddComment} sx={{mt: 2}}>
                Add Comment
            </Button>
        </Box>
    );
};

export default CommentForm;
