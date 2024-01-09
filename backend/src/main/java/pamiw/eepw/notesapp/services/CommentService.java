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
import pamiw.eepw.notesapp.repositories.NoteRepository;

import java.util.Collection;
import java.util.HashSet;
import java.util.Objects;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final NoteService noteService;
    private final CommentMapper commentMapper;
    private final NoteMapper noteMapper;
    private final NoteRepository noteRepository;

    public CommentDto addComment(CommentDto commentDto, Long noteId) {
        NoteDto noteDto = noteService.findById(noteId);
        if (noteDto == null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Note not found");
        }
        Note note = noteMapper.toEntity(noteDto);

        if (note.getComments() == null) {
            note.setComments(new HashSet<>());
        }

        Comment entity = commentMapper.toEntity(commentDto);
        entity.setNote(note);

        note.getComments().add(entity);

        noteRepository.saveAndFlush(note);
        entity = commentRepository.saveAndFlush(entity);

        return commentMapper.toDto(entity);
    }

    public void deleteById(Long id) {
        commentRepository.deleteById(id);
    }

    public CommentDto update(Long id, CommentDto commentDto) {
        if (!Objects.equals(id, commentDto.getId())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Comment id does not match");
        }

        return save(commentDto);
    }

    public CommentDto save(CommentDto commentDto) {
        Comment entity = commentMapper.toEntity(commentDto);
        entity = commentRepository.saveAndFlush(entity);
        return commentMapper.toDto(entity);
    }

    public CommentDto findById(Long commentId) {
        return commentRepository.findById(commentId)
                .map(commentMapper::toDto)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Comment not found"));
    }

    public Collection<CommentDto> findAll() {
        return commentRepository.findAll().stream()
                .map(commentMapper::toDto)
                .toList();
    }

    public Collection<CommentDto> findAllByNoteId(Long noteId) {
        return commentRepository.findAllByNoteId(noteId).stream()
                .map(commentMapper::toDto)
                .toList();
    }
}
