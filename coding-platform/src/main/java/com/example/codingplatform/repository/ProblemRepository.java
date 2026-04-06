package com.example.codingplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.codingplatform.model.Problem;

public interface ProblemRepository extends JpaRepository<Problem, Long> {
}