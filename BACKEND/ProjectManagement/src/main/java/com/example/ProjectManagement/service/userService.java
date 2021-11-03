package com.example.ProjectManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProjectManagement.model.User;
import com.example.ProjectManagement.repository.userRepository;

@Service
public class userService {
	
	@Autowired
	userRepository repo;
	
	public User addUser(User user)
	{
		return repo.save(user);
	}
	public void removeUser(int id)
	{
		repo.delete(repo.findById(id).get());
	}
	public User updateUser(int id, User user)
	{
		user.setUserId(id);
		return repo.save(user);	
	}
	public User userByName(String name)
	{
		return repo.findByName(name);
	}
	
	public List<User> getAllUsers()
	{
		return repo.findAll();
	}
	
	public User userById(int userId)
	{
		return repo.findById(userId).get();
	}
}
