package pamiw.eepw.notesapp.controllers;

import com.fasterxml.jackson.annotation.JsonView;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import pamiw.eepw.notesapp.dto.CommentDto;
import pamiw.eepw.notesapp.dto.NoteDto;
import pamiw.eepw.notesapp.dto.Views;
import pamiw.eepw.notesapp.services.CommentService;

import java.util.Collection;
import java.util.List;

@Slf4j
@RestController
@Tag(name = "Comment", description = "Comments management APIs")
@RequestMapping(value = "comments")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;

    @Operation(
            summary = "Add comment to note",
            description = "Add comment to specified note",
            tags = {"post"})
    @PostMapping("/{id}")
    @ResponseStatus(HttpStatus.CREATED)
    @JsonView(value = Views.Get.class)
    public CommentDto addComment(
            @Parameter(description = "Note Id.", example = "1")
            @PathVariable Long id,
            @RequestBody @JsonView(value = Views.Post.class) CommentDto commentDto) {
        log.debug("Add comment to note with id: {}", id);
        return commentService.addComment(commentDto, id);
    }

    @Operation(
            summary = "Delete comment",
            description = "Delete comment with specified id",
            tags = {"delete"})
    @DeleteMapping("/{commentId}")
    public void deleteComment(
            @Parameter(description = "Comment Id.", example = "1")
            @PathVariable Long commentId) {
        log.debug("Delete comment with id: {}", commentId);
        commentService.deleteById(commentId);
    }

    @Operation(
            summary= "Update comment",
            description = "Update comment with specified id",
            tags = {"put"})
    @PutMapping("/{commentId}")
    @JsonView(value = Views.Get.class)
    public CommentDto update(
            @Parameter(description = "Comment Id.", example = "1")
            @PathVariable Long commentId,
            @RequestBody @JsonView(value = Views.Put.class) CommentDto commentDto) {
        log.debug("Update comment with id: {}", commentId);
        return commentService.update(commentId, commentDto);
    }

    @Operation(
            summary = "Find a comment by Id",
            description = "Get a comment object by specifying its id.",
            tags = {"get"})
    @ApiResponse(
            responseCode = "200",
            content = {
                    @Content(schema = @Schema(implementation = NoteDto.class), mediaType = "application/json")})
    @ApiResponse(
            responseCode = "404",
            content = {@Content(schema = @Schema())})
    @ApiResponse(
            responseCode = "500",
            content = {@Content(schema = @Schema())})
    @GetMapping("/{commentId}")
    @JsonView(value = Views.Get.class)
    public CommentDto findById(
            @Parameter(description = "Comment Id.", example = "1")
            @PathVariable Long commentId) {
        log.debug("Find comment by id: {}", commentId);
        return commentService.findById(commentId);
    }

    @Operation(
            summary = "Find all comments",
            description = "Get all comments.",
            tags = {"get"})
    @GetMapping
    @JsonView(Views.Get.class)
    public List<CommentDto> findAll() {
        log.debug("Find all comments");
        return commentService.findAll();
    }

    @Operation(
            summary = "Find all comments by note id",
            description = "Get all comments by note id.",
            tags = {"get"})
    @GetMapping("/note/{noteId}")
    @JsonView(Views.Get.class)
    public List<CommentDto> findAllByNoteId(
            @Parameter(description = "Note Id.", example = "1")
            @PathVariable Long noteId) {
        log.debug("Find all comments by note id: {}", noteId);
        return commentService.findAllByNoteId(noteId);
    }
}
