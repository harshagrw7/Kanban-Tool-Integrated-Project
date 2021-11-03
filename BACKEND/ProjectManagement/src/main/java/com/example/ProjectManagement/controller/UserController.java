package com.example.ProjectManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.ProjectManagement.model.User;
import com.example.ProjectManagement.service.userService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/users")
public class UserController {
	
	@Autowired
	userService service;
	
	@GetMapping("/{name}")
	User getUserByName(@PathVariable String name)
	{
		return service.userByName(name);
		
	}
	
	@PostMapping("")
	User addUser(@RequestBody User user)
	{
		return service.addUser(user);
	}
		
	@GetMapping("")
	List<User> getUsers()
	{
		return service.getAllUsers();
	}
	
	@GetMapping("/id/{userId}")
	User getUserById(@PathVariable int userId)
	{
		return service.userById(userId);
	}
}
