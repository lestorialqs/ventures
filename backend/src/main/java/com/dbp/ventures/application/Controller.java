package com.dbp.ventures.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Controller {
    @Autowired
    private ProgramService programService;

    // Obtener todos los programas
    @GetMapping
    public ResponseEntity<List<Program>> getAllPrograms() {
        List<Program> programs = programService.getAllPrograms();
        return ResponseEntity.ok(programs);
    }

    // Obtener un programa por ID
    @GetMapping("/{id}")
    public ResponseEntity<Program> getProgramById(@PathVariable Long id) {
        return programService.getProgramById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // Crear un nuevo programa
    @PostMapping
    public ResponseEntity<Program> createProgram(@RequestBody Program program) {
        Program createdProgram = programService.createProgram(program);
        return ResponseEntity.ok(createdProgram);
    }

    // Actualizar un programa por ID
    @PutMapping("/{id}")
    public ResponseEntity<Program> updateProgram(
            @PathVariable Long id,
            @RequestBody Program updatedProgram) {
        try {
            Program program = programService.updateProgram(id, updatedProgram);
            return ResponseEntity.ok(program);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }

    // Eliminar un programa por ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteProgram(@PathVariable Long id) {
        try {
            programService.deleteProgram(id);
            return ResponseEntity.noContent().build();
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
    @GetMapping("/fibo")
    public ResponseEntity<Integer> getFibo() {


        return

    }
}