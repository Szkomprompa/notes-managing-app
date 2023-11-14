package pamiw.eepw.notesapp.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import pamiw.eepw.notesapp.dto.CommentDto;
import pamiw.eepw.notesapp.dto.Views;
import pamiw.eepw.notesapp.services.CommentService;

@Slf4j
@RestController
@Tag(name = "Comment", description = "Comments management APIs")
@RequestMapping(value = "comment")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @Operation(
            summary = "Add comment to note",
            description = "Add comment to specified note",
            tags = {"post"})
    @PostMapping("/{id}/comment")
    public CommentDto addComment(
            @Parameter(description = "Note Id.", example = "1")
            @PathVariable Long id,
            @RequestBody @JsonView(value = Views.Put.class) CommentDto commentDto) {
        log.debug("Add comment to note with id: {}", id);
        return commentService.addComment(commentDto, id);
    }
}
