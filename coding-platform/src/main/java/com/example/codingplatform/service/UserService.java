package com.example.codingplatform.service;

import org.springframework.stereotype.Service;
import java.util.List;

import com.example.codingplatform.model.User;
import com.example.codingplatform.repository.UserRepository;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // Get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Add user
    public User addUser(User user) {
        return userRepository.save(user);
    }

    // Get user by ID
    public User getUserById(Long id) {
        return userRepository.findById(id).orElse(null);
    }
}