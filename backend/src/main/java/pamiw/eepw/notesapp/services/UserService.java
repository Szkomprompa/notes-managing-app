package pamiw.eepw.notesapp.services;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import pamiw.eepw.notesapp.repositories.UserRepository;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
}
