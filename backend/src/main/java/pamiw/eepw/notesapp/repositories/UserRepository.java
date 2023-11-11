package pamiw.eepw.notesapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pamiw.eepw.notesapp.entities.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
}
