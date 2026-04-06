package com.example.codingplatform.service;

import org.springframework.stereotype.Service;
import java.util.List;

import com.example.codingplatform.model.Problem;
import com.example.codingplatform.repository.ProblemRepository;

@Service
public class ProblemService {

    private final ProblemRepository problemRepository;

    public ProblemService(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }

    public List<Problem> getAllProblems() {
        return problemRepository.findAll();
    }

    public Problem addProblem(Problem problem) {
        return problemRepository.save(problem);
    }

    public Problem getProblemById(Long id) {
        return problemRepository.findById(id).orElse(null);
    }
}