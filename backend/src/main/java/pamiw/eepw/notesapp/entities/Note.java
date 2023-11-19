package pamiw.eepw.notesapp.entities;

import jakarta.persistence.*;
import lombok.*;
import lombok.experimental.SuperBuilder;

import java.util.HashSet;
import java.util.Set;

@Entity
@Table
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

//    @ManyToOne(fetch = FetchType.LAZY)
//    private User user;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "note")
    private Set<Comment> comments = new HashSet<>();
}
