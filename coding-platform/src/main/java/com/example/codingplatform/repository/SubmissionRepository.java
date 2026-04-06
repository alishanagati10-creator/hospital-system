package com.example.codingplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;   // ✅ IMPORTANT
import com.example.codingplatform.model.Submission;

import java.util.List;   // ✅ IMPORTANT

public interface SubmissionRepository extends JpaRepository<Submission, Long> {

    @Query("SELECT s.user.username, COUNT(s) FROM Submission s WHERE s.status = 'Accepted' GROUP BY s.user.username ORDER BY COUNT(s) DESC")
    List<Object[]> getLeaderboard();
}
