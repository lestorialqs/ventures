package com.dbp.ventures.infrastructure;

import com.dbp.ventures.domain.Program;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface repository extends JpaRepository<Program, Long> {
}
