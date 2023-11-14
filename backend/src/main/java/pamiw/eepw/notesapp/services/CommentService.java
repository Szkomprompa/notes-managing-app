package pamiw.eepw.notesapp.services;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pamiw.eepw.notesapp.dto.CommentDto;
import pamiw.eepw.notesapp.dto.NoteDto;
import pamiw.eepw.notesapp.entities.Comment;
import pamiw.eepw.notesapp.entities.Note;
import pamiw.eepw.notesapp.mappings.CommentMapper;
import pamiw.eepw.notesapp.mappings.NoteMapper;
import pamiw.eepw.notesapp.repositories.CommentRepository;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final NoteService noteService;
    private final CommentMapper commentMapper;
    private final NoteMapper noteMapper;

    public CommentDto addComment(CommentDto commentDto, Long noteId) {
        NoteDto noteDto = noteService.findById(noteId);
        if (noteDto == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Note not found");
        }
        Note note = noteMapper.toEntity(noteDto);

        Comment entity = commentMapper.toEntity(commentDto);
        entity.setNote(note);
        entity = commentRepository.saveAndFlush(entity);
        return commentMapper.toDto(entity);
    }
}
