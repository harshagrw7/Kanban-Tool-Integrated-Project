package com.example.ProjectManagement.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.ProjectManagement.model.Project;
import com.example.ProjectManagement.model.User;

@Repository
public interface projectRepository extends JpaRepository<Project,Integer>{
	
	@Query(value="Select u from Project u where u.user.userId=?1")
	List<Project> findProjectByUser(int userId);
	
	@Query(value="Select u from Project u where u.priority=:priority AND u.user.userId=:userId")
	List<Project> findProjectByPriority(int priority,int userId);

}
