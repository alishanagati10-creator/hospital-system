package com.example.codingplatform.model;

import jakarta.persistence.*;
import jakarta.persistence.Lob;

@Entity
public class Submission {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


   @Lob
  @Column(columnDefinition = "LONGTEXT")
  private String code;
    private String language;
    private String status; // PASS / FAIL
    private String output;

    // Many submissions belong to one user
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    // Many submissions belong to one problem
    @ManyToOne
    @JoinColumn(name = "problem_id")
    private Problem problem;
    public String getOutput() {
    return output;
}

public void setOutput(String output) {
    this.output = output;
}

    // Default constructor
    public Submission() {
    }

    // Getters and Setters

    public Long getId() {
        return id;
    }

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Problem getProblem() {
        return problem;
    }

    public void setProblem(Problem problem) {
        this.problem = problem;
    }
}