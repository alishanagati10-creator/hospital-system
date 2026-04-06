package com.example.codingplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.codingplatform.model.TestCase;
import java.util.List;

public interface TestCaseRepository extends JpaRepository<TestCase, Long> {
    List<TestCase> findByProblemId(Long problemId);
}