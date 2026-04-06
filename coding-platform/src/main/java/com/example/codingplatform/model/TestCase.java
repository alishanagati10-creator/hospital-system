
package com.example.codingplatform.model;

import jakarta.persistence.*;

@Entity
public class TestCase {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String input;

    @Column(length = 1000)
    private String expectedOutput;

    private Long problemId;

    // ✅ GETTERS

    public String getInput() {
        return input;
    }

    public String getExpectedOutput() {
        return expectedOutput;
    }

    public Long getProblemId() {
        return problemId;
    }

    public Long getId() {
        return id;
    }

    // ✅ SETTERS

    public void setInput(String input) {
        this.input = input;
    }

    public void setExpectedOutput(String expectedOutput) {
        this.expectedOutput = expectedOutput;
    }

    public void setProblemId(Long problemId) {
        this.problemId = problemId;
    }

    public void setId(Long id) {
        this.id = id;
    }
}