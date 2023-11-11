package pamiw.eepw.notesapp.mappings;

import org.mapstruct.Mapper;
import pamiw.eepw.notesapp.dto.NoteDto;
import pamiw.eepw.notesapp.entities.Note;

@Mapper
public interface NoteMapper {
    NoteDto toDto(Note note);

    Note toEntity(NoteDto noteDto);
}
