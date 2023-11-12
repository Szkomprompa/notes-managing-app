package pamiw.eepw.notesapp.controllers;

import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pamiw.eepw.notesapp.dto.UserDto;
import pamiw.eepw.notesapp.repositories.UserRepository;

@Slf4j
@RestController
@Tag(name = "Users")
@RequestMapping(value = "users")
@RequiredArgsConstructor
public class UserController {
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

//    @PostMapping("/register")
//    public ResponseEntity<String> registerUser(@RequestBody UserDto user) {
//        if (userRepository.findByUsername(user.getUsername()).isPresent()) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("User already exists.");
//        }
//
//        userRepository.save(user);
//        return ResponseEntity.status(HttpStatus.CREATED).body("User was registered.");
//    }
}
