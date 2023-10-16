package com.example.demo.service;

import com.example.demo.entity.UserResponse;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public UserResponse getUsernameByEmail(String email)
    {
        var user =  userRepository.findByEmail(email).orElseThrow();
        UserResponse userResponse = UserResponse.builder()
                .id(user.getId())
                .email(user.getEmail())
                .Username(String.format(user.getFirstname() + " " + user.getLastname()))
                .role(user.getRole())
                .build();
        return userResponse;
    }
}
