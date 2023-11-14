package pamiw.eepw.notesapp.services;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pamiw.eepw.notesapp.dto.UserDto;
import pamiw.eepw.notesapp.entities.User;
import pamiw.eepw.notesapp.mappings.UserMapper;
import pamiw.eepw.notesapp.repositories.UserRepository;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserMapper userMapper;
    private final UserRepository userRepository;

    public UserDto register(UserDto userDto) {
        if (userRepository.findByUsername(userDto.getUsername()) != null) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User already exists");
        }

        User entity = userMapper.toEntity(userDto);
        entity = userRepository.saveAndFlush(entity);
        return userMapper.toDto(entity);
    }
}
