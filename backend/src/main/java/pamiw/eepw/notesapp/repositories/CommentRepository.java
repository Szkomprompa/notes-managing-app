package pamiw.eepw.notesapp.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import pamiw.eepw.notesapp.dto.CommentDto;
import pamiw.eepw.notesapp.entities.Comment;

import java.util.Collection;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Long> {
    Collection<Comment> findAllByNoteId(Long noteId);
}
