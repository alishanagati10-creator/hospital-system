package com.example.codingplatform.controller;

import org.springframework.web.bind.annotation.*;
import java.util.List;

import com.example.codingplatform.model.User;
import com.example.codingplatform.repository.UserRepository;

@RestController
@RequestMapping("/users")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UserController {

    private final UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // GET all users
    @GetMapping
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    // ✅ FIXED: POST method for register
    @PostMapping
    public User addUser(@RequestBody User user) {
        return userRepository.save(user);
    }
}