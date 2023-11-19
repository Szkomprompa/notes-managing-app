package pamiw.eepw.notesapp.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;
import pamiw.eepw.notesapp.dto.CommentDto;
import pamiw.eepw.notesapp.dto.NoteDto;
import pamiw.eepw.notesapp.dto.Views;
import pamiw.eepw.notesapp.services.CommentService;

import java.util.Collection;

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

    @Operation(
            summary = "Delete comment",
            description = "Delete comment with specified id",
            tags = {"delete"})
    @DeleteMapping("/{id}/comment/{commentId}")
    public void deleteComment(
            @Parameter(description = "Comment Id.", example = "1")
            @PathVariable Long commentId,
            @Parameter(description = "Note Id.", example = "1")
            @PathVariable Long id) {
        log.debug("Delete comment with id: {}, from note with id: {}", commentId, id);
        commentService.deleteById(commentId);
    }

    @Operation(
            summary= "Update comment",
            description = "Update comment with specified id",
            tags = {"put"})
    @PutMapping("/{id}/comment/{commentId}")
    public CommentDto update(
            @Parameter(description = "Comment Id.", example = "1")
            @PathVariable Long commentId,
            @Parameter(description = "Note Id.", example = "1")
            @PathVariable Long id,
            @RequestBody @JsonView(value = Views.Put.class) CommentDto commentDto) {
        log.debug("Update comment with id: {}, from note with id: {}", commentId, id);
        return commentService.update(commentId, commentDto, id);
    }

    @Operation(
            summary = "Find a comment by Id",
            description = "Get a comment object by specifying its id.",
            tags = {"get"})
    @GetMapping("/comment/{commentId}")
    public CommentDto findById(
            @Parameter(description = "Comment Id.", example = "1")
            @PathVariable Long commentId) {
        log.debug("Find comment by id: {}", commentId);
        return commentService.findById(commentId);
    }

    @Operation(
            summary = "Find all comments by note Id",
            description = "Get all comments by specifying note id.",
            tags = {"get"})
    @GetMapping("/{id}/comment")
    public Collection<CommentDto> findAllCommentsByNoteId(
            @Parameter(description = "Note Id.", example = "1")
            @PathVariable Long id) {
        log.debug("Find all comments by note id: {}", id);
        return commentService.findAllCommentsByNoteId(id);
    }
}
