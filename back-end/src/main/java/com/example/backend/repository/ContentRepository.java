package com.example.backend.repository;

import com.example.backend.entity.Content;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ContentRepository extends JpaRepository<Content, Long> {

    Page<Content> findByCategory(int category, Pageable pageable);

    @Query("SELECT MAX(e.id) FROM Content e")
    Long findByLastId();
}
