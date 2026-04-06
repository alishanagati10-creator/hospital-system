package com.example.codingplatform.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.example.codingplatform.model.Problem;
import com.example.codingplatform.repository.ProblemRepository;

@RestController
@RequestMapping("/problems")
@CrossOrigin(origins ="http://localhost:3000")
public class ProblemController {

    private final ProblemRepository problemRepository;

    // Constructor
    public ProblemController(ProblemRepository problemRepository) {
        this.problemRepository = problemRepository;
    }

    // Get all problems
    @GetMapping
    public List<Problem> getAllProblems() {
        return problemRepository.findAll();
    }

    // Add problem using browser
    @GetMapping("/add")
    public String addProblem(@RequestParam String title,
                             @RequestParam String description,
                             @RequestParam String difficulty) {

        Problem problem = new Problem();
        problem.setTitle(title);
        problem.setDescription(description);
        problem.setDifficulty(difficulty);

        problemRepository.save(problem);

        return "Problem Added Successfully!";
    }
}