package com.example.demo.service;

import com.example.demo.DAO.AuthenticationRequest;
import com.example.demo.DAO.AuthenticationResponse;
import com.example.demo.DAO.RegisterRequest;
import com.example.demo.config.JwtService;
import com.example.demo.entity.Role;
import com.example.demo.entity.User;
import com.example.demo.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
	
	private final UserRepository repository;
	
	private final PasswordEncoder passwordEncoder;
	
	private final JwtService jwtService;
	
	private final AuthenticationManager authenticationManager;
	
	public User register(RegisterRequest request) {
		var user = User.builder()
				.firstname(request.getFirstname())
				.lastname(request.getLastname())
				.email(request.getEmail())
				.password(passwordEncoder.encode(request.getPassword()))
				.role(Role.USER)
				.build();
		var jwtToken = jwtService.generateToken(user);
		return repository.save(user);

	}
	
	public AuthenticationResponse authenticate(AuthenticationRequest request) {
		authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(
						request.getEmail(),
						request.getPassword()
						)
				);
		    var user = repository.findByEmail(request.getEmail())
		        .orElseThrow();
		    var jwtToken = jwtService.generateToken(user);
		    return AuthenticationResponse.builder()
		        .token(jwtToken)
		        .build();
	}
}
