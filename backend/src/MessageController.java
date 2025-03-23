package com.example.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController  // This is necessary!
@RequestMapping("/api")
public class MessageController {

    @GetMapping("/message")
    public String getMessage() {
        return "Hello from Backend!";
    }
}

