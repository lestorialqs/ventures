package com.dbp.ventures.domain;

import com.dbp.ventures.infrastructure.repository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class service {

    @Autowired
    private repository programRepository;

    // Obtener todos los programas
    public List<Program> getAllPrograms() {
        return programRepository.findAll();
    }

    // Obtener programa por ID
    public Optional<Program> getProgramById(Long id) {
        return programRepository.findById(id);
    }

    // Crear un nuevo programa
    public Program createProgram(Program program) {
        return programRepository.save(program);
    }

    // Actualizar programa por ID
    public Program updateProgram(Long id, Program updatedProgram) {
        return programRepository.findById(id).map(program -> {
            program.setName(updatedProgram.getName());
            program.setDescription(updatedProgram.getDescription());
            return programRepository.save(program);
        }).orElseThrow(() -> new RuntimeException("Program not found with id " + id));
    }

    // Eliminar programa por ID
    public void deleteProgram(Long id) {
        if (programRepository.existsById(id)) {
            programRepository.deleteById(id);
        } else {
            throw new RuntimeException("Program not found with id " + id);
        }
    }
}