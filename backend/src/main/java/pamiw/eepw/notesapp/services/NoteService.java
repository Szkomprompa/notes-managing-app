package pamiw.eepw.notesapp.services;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pamiw.eepw.notesapp.dto.NoteDto;
import pamiw.eepw.notesapp.entities.Comment;
import pamiw.eepw.notesapp.entities.Note;
import pamiw.eepw.notesapp.mappings.NoteMapper;
import pamiw.eepw.notesapp.repositories.CommentRepository;
import pamiw.eepw.notesapp.repositories.NoteRepository;

import java.util.List;
import java.util.Objects;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class NoteService {

    private final NoteMapper noteMapper;
    private final NoteRepository noteRepository;
    private final CommentRepository commentRepository;

    public List<NoteDto> findAll() {
        return noteRepository.findAll().stream()
                .map(noteMapper::toDto)
                .toList();
    }

    public NoteDto findById(Long id) {
        return noteRepository.findById(id)
                .map(noteMapper::toDto)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Note not found"));
    }

    public NoteDto create(NoteDto noteDto) {
        if (noteDto.getId() != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Note id already exists");
        }

        return save(noteDto);
    }

    public NoteDto update(Long id, NoteDto noteDto) {
        if (!Objects.equals(id, noteDto.getId())) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Note id does not match");
        }

        return save(noteDto);
    }

    public NoteDto save(NoteDto noteDto) {
        Note entity = noteMapper.toEntity(noteDto);
        entity = noteRepository.saveAndFlush(entity);
        return noteMapper.toDto(entity);
    }

    public void deleteById(Long id) {
        Note note = noteRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Note not found"));

        Set<Comment> comments = note.getComments();

        if (comments != null) {
            comments.forEach(comment -> commentRepository.deleteById(comment.getId()));
        }

        noteRepository.deleteById(id);
    }
}
