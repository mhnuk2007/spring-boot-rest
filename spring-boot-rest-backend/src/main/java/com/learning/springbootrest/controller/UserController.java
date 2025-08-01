package com.learning.springbootrest.controller;

import com.learning.springbootrest.model.User;
import com.learning.springbootrest.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        System.out.println(user);
        userService.saveUser(user);
        System.out.println("User saved");
        return user;
    }

    @GetMapping("/greet")
    public String greet(){
        return "Hello";
    }
}
