package pamiw.eepw.notesapp.mappings;

import org.mapstruct.Mapper;
import pamiw.eepw.notesapp.dto.CommentDto;
import pamiw.eepw.notesapp.entities.Comment;

@Mapper
public interface CommentMapper {
    Comment toEntity(CommentDto commentDto);
    CommentDto toDto(Comment comment);
}
