package com.example.ProjectManagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.ProjectManagement.model.Project;
import com.example.ProjectManagement.model.User;
import com.example.ProjectManagement.repository.projectRepository;
import com.example.ProjectManagement.repository.userRepository;


@Service
public class projectService {
	
	@Autowired
	private projectRepository repo;
	
	@Autowired
	private userRepository userRepo;
	
	public Project addProject(Project project)
	{
		return repo.save(project);
		//return project;
		
	}
	
	public void deleteProject(Integer id)
	{
		Project project = repo.findById(id).get();
		repo.delete(project);
	}
	
	public List<Project> getAllProjects()
	{
		return repo.findAll();
	}
	
	public Project projectById(Integer id)
	{
		return repo.findById(id).get();
	}
	
	public Project updateProject(int id,Project project)
	{
		project.setProjectId(id);
		return repo.save(project);
	}
	public List<Project> projectByUserId(int id)
	{
		return repo.findProjectByUser(id);
	}

	public Project addProjectOfUser(Project project, int userId) {
			User user = userRepo.findById(userId).get();
			user.setProjects(project);
			project.setUser(user);
			userRepo.save(user);
			return repo.save(project);
	}

	public List<Project> getProjectsByPriority(int userId, int priority) {
		// TODO Auto-generated method stub
		return repo.findProjectByPriority(priority, userId);
		
	}

}
