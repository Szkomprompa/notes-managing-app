package pamiw.eepw.notesapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pamiw.eepw.notesapp.entities.Note;

public interface NoteRepository extends JpaRepository<Note, Long> {

}
