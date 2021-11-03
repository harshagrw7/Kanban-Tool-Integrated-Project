package com.example.ProjectManagement.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.ProjectManagement.model.Project;
import com.example.ProjectManagement.service.projectService;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/projects")
public class ProjectController {

	@Autowired
	private projectService service;
	
	@GetMapping("")
	public List<Project> allProjects()
	{
		return service.getAllProjects();
	}
	
	@PostMapping("")
	Project addProject(@RequestBody Project project)
	{
		return service.addProject(project);
	}
	
	@PostMapping("/user/{userId}")
	Project addProjectofUser(@RequestBody Project project, @PathVariable int userId)
	{
		return service.addProjectOfUser(project,userId);
	}
	
	@DeleteMapping("/{id}")
	void deleteProject(@PathVariable("id") int projectId)
	{
		service.deleteProject(projectId);
	}
	
	@GetMapping("/{id}")
	Project getProjectById(@PathVariable("id") int projectId)
	{
		return service.projectById(projectId);
	}
	
	@PutMapping("/{id}")
	Project updateProject(@PathVariable("id") int projectId,@RequestBody Project project)
	{
		return service.updateProject(projectId, project);
	}
	
	@GetMapping("/user/{id}")
	List<Project> projectOfUser(@PathVariable("id") int userId)
	{
		return service.projectByUserId(userId);
	}
	
	@GetMapping("/priority/{userId}/{priority}")
	List<Project> projectsByPriority(@PathVariable int userId, @PathVariable int priority)
	{
		return service.getProjectsByPriority(userId,priority);
	}
	
}
