package com.learning.springbootrest.service;

import com.learning.springbootrest.model.User;
import com.learning.springbootrest.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepo repo;
    private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public void saveUser(User user) {
        user.setPassword(encoder.encode(user.getPassword()));

        repo.save(user);
    }
}
