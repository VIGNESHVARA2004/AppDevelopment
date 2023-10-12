package com.example.nous.service;


import com.example.nous.user.User;
import com.example.nous.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;

    public String getUsernameByEmail(String email)
    {
        var user =  userRepository.findByEmail(email).orElseThrow();;
        String format = String.format(user.getFirstname() + " " + user.getLastname());
        return format;
    }
}
