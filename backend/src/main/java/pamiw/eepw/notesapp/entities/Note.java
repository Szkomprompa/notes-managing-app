package pamiw.eepw.notesapp.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "note")
@Setter
@Getter
@SuperBuilder
@ToString(callSuper = true)
@NoArgsConstructor
@AllArgsConstructor
public class Note {

    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String content;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "note", fetch = FetchType.EAGER)
    private Set<Comment> comments = new HashSet<>();
}
