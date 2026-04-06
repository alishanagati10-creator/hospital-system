package com.example.codingplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.codingplatform.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}