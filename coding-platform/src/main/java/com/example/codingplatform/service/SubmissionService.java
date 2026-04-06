package com.example.codingplatform.service;

import org.springframework.stereotype.Service;
import java.util.List;

import com.example.codingplatform.model.Submission;
import com.example.codingplatform.repository.SubmissionRepository;

@Service
public class SubmissionService {

    private final SubmissionRepository submissionRepository;

    public SubmissionService(SubmissionRepository submissionRepository) {
        this.submissionRepository = submissionRepository;
    }

    public List<Submission> getAllSubmissions() {
        return submissionRepository.findAll();
    }

    public Submission addSubmission(Submission submission) {
        return submissionRepository.save(submission);
    }
}