package com.example.demo.Controller;

import com.example.demo.entity.UserResponse;
import com.example.demo.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth/user")
@RequiredArgsConstructor
public class UserController {


    private final UserService userService;

    @GetMapping("/username/{email}")
    public UserResponse getUsername(@PathVariable("email") String email)
    {
        return userService.getUsernameByEmail(email);
    }

}
