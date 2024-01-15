import React, {useEffect, useState} from "react";
import {CommentDto, CommentDtoWithoutId} from "@/types/comment/commentDto";
import {Box, Button, Container, Stack, TextField, Typography} from "@mui/material";
import {createComment, getCommentsByNoteId} from "@/services/commentService";

const NoteDetails = (props: {noteId: number}) => {
    const [comments, setComments] = useState<CommentDto[] | null>(null);
    const [newCommentContent, setNewCommentContent] = useState('');

    const handleAddComment = () => {
        const comment: CommentDtoWithoutId = {
            content: newCommentContent,
        }
        setNewCommentContent('');

        createComment(props.noteId, comment)
            .then((createdComment) => {
                console.log('Created comment:', createdComment);
            }).catch((error) => {
            console.error('Error creating comment:', error.request.data);
        });
    };

    useEffect(() => {
        let timeout = setTimeout(() => {
            getCommentsByNoteId(props.noteId)
                .then((comments) => {
                    setComments(comments);
                    console.log('Comments:', comments);
                }).catch((error) => {
                console.error('Error fetching comments:', error);
            });
        }, 500);

        return () => clearTimeout(timeout);
    }, [handleAddComment]);

    return (
        <Container>
            <Typography variant="h5" align="center" color="text.secondary">
                Comments
            </Typography>
            <Stack spacing={2} sx={{py: '5'}}>
                {comments?.map((comment) => (
                    <Box bgcolor="#ff9800" borderRadius="16px" key={comment.id}>
                        <Typography align="left" variant="body1" sx={{pl: 2}}> {comment.content} </Typography>
                    </Box>
                ))}
            </Stack>
            <Box mt={2}>
                <TextField
                    label="Add a Comment"
                    variant="outlined"
                    fullWidth
                    value={newCommentContent}
                    onChange={(e) => setNewCommentContent(e.target.value)}
                />
                <Button variant="contained" color="primary" onClick={handleAddComment} sx={{mt: 2}}>
                    Add Comment
                </Button>
            </Box>
        </Container>
    );
};

export default NoteDetails;