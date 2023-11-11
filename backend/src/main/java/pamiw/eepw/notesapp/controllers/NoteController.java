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

import pamiw.eepw.notesapp.dto.NoteDto;
import pamiw.eepw.notesapp.dto.Views;
import pamiw.eepw.notesapp.services.NoteService;

import java.util.Collection;

@Slf4j
@RestController
@Tag(name = "Notes", description = "Notes management APIs")
@RequestMapping(value = "notes")
@RequiredArgsConstructor
public class NoteController {
    private final NoteService noteService;

    @Operation(
            summary = "Find all Notes",
            description = "Get all Note objects.",
            tags = {"get"})
    @GetMapping
    @JsonView(Views.Get.class)
    public Collection<NoteDto> findAll() {
        log.debug("Find all notes");
        return noteService.findAll();
    }

    @Operation(
            summary = "Find a Note by Id",
            description = "Get a Note object by specifying its id.",
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
    @GetMapping("/{id}")
    @JsonView(value = Views.Get.class)
    public NoteDto findById(
            @Parameter(description = "Note Id.", example = "1")
            @PathVariable Long id) {
        log.debug("Find note by id: {}", id);
        return noteService.findById(id);
    }

    @Operation(
            summary = "Create a Note",
            description = "Create a Note object.",
            tags = {"post"})
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    @JsonView(value = Views.Get.class)
    public NoteDto create(
            @RequestBody @JsonView(value = Views.Post.class) NoteDto noteDto) {
        log.debug("Create note: {}", noteDto);
        return noteService.create(noteDto);
    }

    @Operation(
            summary = "Update a Note by Id",
            description = "Update a Note object by specifying its id.",
            tags = {"put"})
    @PutMapping("/{id}")
    @JsonView(value = Views.Get.class)
    public NoteDto update(
            @Parameter(description = "Note Id.", example = "1")
            @PathVariable Long id,
            @RequestBody @JsonView(value = Views.Put.class) NoteDto noteDto) {
        log.debug("Update note with id: {}, note: {}", id, noteDto);
        return noteService.update(id, noteDto);
    }

    @Operation(
            summary = "Delete a Note by Id",
            description = "Delete a Note object by specifying its id.",
            tags = {"delete"})
    @DeleteMapping("/{id}")
    public void delete(
            @Parameter(description = "Note Id.", example = "1")
            @PathVariable Long id) {
        log.debug("Delete note with id: {}", id);
        noteService.deleteById(id);
    }
}
