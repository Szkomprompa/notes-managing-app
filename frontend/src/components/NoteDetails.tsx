import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Divider, TextField,
    Typography
} from "@mui/material";
import React, {useEffect, useState} from "react";
import CommentForm from "@/components/CommentForm";
import {NoteDto} from "@/types/note/noteTypes";
import {getNoteById, updateNote} from "@/services/noteService";
import {NoteDtoWithoutId} from "@/types/note/noteTypes";
import CommentsSection from "@/components/CommentsSection";

const NoteDetails = (props: { id: number, open: boolean, onClose: () => void }) => {
    const [note, setNote] = useState<NoteDto | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editedTitle, setEditedTitle] = useState('');
    const [editedContent, setEditedContent] = useState('');

    const handleEditNote = () => {
        setIsEditing(true);
        setEditedTitle(note?.title || '');
        setEditedContent(note?.content || '');
    };

    const handleSaveEdit = () => {
        const note: NoteDto = {
            id: props.id,
            title: editedTitle,
            content: editedContent,
        }

        updateNote(props.id, note)
            .then((updatedNote) => console.log('Updated note:', updatedNote))
            .catch((error) => console.error('Error updating note:', error));

        setNote(note);
        setIsEditing(false);
    };

    useEffect(() => {
        getNoteById(props.id)
            .then((note) => {
                setNote(note);
                console.log('Note:', note)
            });
    }, [props.id]);

    return (
        <Dialog open={props.open} onClose={props.onClose} fullScreen>
            <DialogTitle>Note details</DialogTitle>
            <DialogContent>
                <Box sx={{
                    bgcolor: 'background.paper',
                    pt: 14,
                    pb: 6,
                    textAlign: 'center',
                }}>
                    {isEditing ? (
                        <>
                            <TextField
                                label="Title"
                                fullWidth
                                value={editedTitle}
                                sx={{pb: 5}}
                                onChange={(e) => setEditedTitle(e.target.value)}
                            />
                            <TextField
                                label="Content"
                                multiline
                                fullWidth
                                value={editedContent}
                                onChange={(e) => setEditedContent(e.target.value)}
                            />
                        </>
                    ) : (
                        <>
                            <Typography variant="h4">{note?.title}</Typography>
                            <Typography sx={{pb: 5}}>
                                {note?.content}
                            </Typography>
                        </>
                    )}

                    <Divider/>

                    <Box sx={{pt: 5}}>
                        <CommentsSection noteId={note?.id!}/>
                    </Box>
                </Box>
            </DialogContent>
            <DialogActions>
                {isEditing ? (
                    <Button variant="contained" color="primary" onClick={handleSaveEdit}>
                        Save Changes
                    </Button>
                ) : (
                    <Button variant="contained" color="primary" onClick={handleEditNote}>
                        Edit Note
                    </Button>
                )}
                <Button variant="contained" color="primary" onClick={props.onClose}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default NoteDetails;