package com.example.hospital_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.hospital_system.model.User;

public interface UserRepository extends JpaRepository<User, Long> {

}