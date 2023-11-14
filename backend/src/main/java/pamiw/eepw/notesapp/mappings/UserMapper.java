package pamiw.eepw.notesapp.mappings;

import org.mapstruct.Mapper;
import pamiw.eepw.notesapp.dto.UserDto;
import pamiw.eepw.notesapp.entities.User;

@Mapper
public interface UserMapper {
    UserDto toDto(User user);
    User toEntity(UserDto userDto);
}
