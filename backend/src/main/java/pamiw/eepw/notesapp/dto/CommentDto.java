package pamiw.eepw.notesapp.dto;

import com.fasterxml.jackson.annotation.JsonView;
import io.swagger.v3.oas.annotations.media.Schema;
import jakarta.validation.constraints.NotNull;
import lombok.Builder;
import lombok.Value;
import lombok.extern.jackson.Jacksonized;

@Value
@Builder
@Jacksonized
public class CommentDto {

    @Schema(description = "Comment primary key")
    @JsonView({Views.Get.class, Views.Put.class})
    Long id;
    
    @Schema(description = "Comment text", example = "Some text")
    @JsonView({Views.Get.class, Views.Put.class, Views.Post.class})
    String content;
}
