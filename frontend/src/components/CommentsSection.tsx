import React, {useEffect, useState} from "react";
import {CommentDto, CommentDtoWithoutId} from "@/types/comment/commentDto";
import {Box, Button, Container, IconButton, Stack, TextField, Typography} from "@mui/material";
import {createComment, deleteComment, getCommentsByNoteId} from "@/services/commentService";
import {Delete} from "@mui/icons-material";

const NoteDetails = (props: {noteId: number}) => {
    const [comments, setComments] = useState<CommentDto[]>([]);
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

    const handleDeleteComment = (id: number) => {
        deleteComment(id)
            .then(() => {
                setComments(comments?.filter((comment) => comment.id !== id));
                console.log('Deleted comment:', id);
            }).catch((error) => {
            console.error('Error deleting comment:', error.request.data);
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
                    <Box sx={{display: 'flex', flex: 1}} bgcolor="#ff9800" minHeight="10" borderRadius="16px" key={comment.id} justifyItems="center">
                        <Typography align="left" variant="body1" sx={{pl: 2, py: 1, flex: 1}} justifyContent="center"> {comment.content} </Typography>
                        <IconButton onClick={() => handleDeleteComment(comment.id)} aria-label="delete" sx={{ mr: 2, maxHeight: '50%'}} >
                            <Delete color="secondary"/>
                        </IconButton>
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