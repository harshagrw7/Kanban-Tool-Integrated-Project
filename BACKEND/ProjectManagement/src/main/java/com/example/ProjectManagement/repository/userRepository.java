package com.example.ProjectManagement.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.ProjectManagement.model.User;

@Repository
public interface userRepository extends JpaRepository<User,Integer>{
	
	@Query(value="Select u from User u where u.userName=?1")
	User findByName(String name);

}
