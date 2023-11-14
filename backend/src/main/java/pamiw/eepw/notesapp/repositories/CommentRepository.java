package pamiw.eepw.notesapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pamiw.eepw.notesapp.entities.Comment;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {

}
