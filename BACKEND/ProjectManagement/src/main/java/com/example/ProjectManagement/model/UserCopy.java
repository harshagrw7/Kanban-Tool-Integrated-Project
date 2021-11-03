//package com.example.ProjectManagement.model;
//
//import java.util.ArrayList;
//import java.util.List;
//
//import javax.persistence.Entity;
//import javax.persistence.FetchType;
//import javax.persistence.GeneratedValue;
//import javax.persistence.GenerationType;
//import javax.persistence.Id;
//import javax.persistence.OneToMany;
//import javax.persistence.Table;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//@Entity
//@Table(name = "user_tbl")
//public class User {
//	
//	@Id
//	@GeneratedValue(strategy = GenerationType.IDENTITY)
//	int userId;
//	String userName;
//	String userEmail;
//	String userPassword;
//	
//	@JsonIgnore
//	@OneToMany(fetch = FetchType.LAZY, mappedBy = "user")
//	List<Project>projects = new ArrayList<>();
//	public User() {
//		super();
//	}
//	
//	public User(int userId, String userName, String userEmail, String userPassword) {
//		super();
//		this.userId = userId;
//		this.userName = userName;
//		this.userEmail = userEmail;
//		this.userPassword = userPassword;
//	}
//
//	public int getUserId() {
//		return userId;
//	}
//
//	public void setUserId(int userId) {
//		this.userId = userId;
//	}
//
//	public String getUserName() {
//		return userName;
//	}
//
//	public void setUserName(String userName) {
//		this.userName = userName;
//	}
//
//	public String getUserEmail() {
//		return userEmail;
//	}
//
//	public void setUserEmail(String userEmail) {
//		this.userEmail = userEmail;
//	}
//
//	public String getUserPassword() {
//		return userPassword;
//	}
//
//	public void setUserPassword(String userPassword) {
//		this.userPassword = userPassword;
//	}
//
//	public List<Project> getProjects() {
//		return projects;
//	}
//
//	public void setProjects(Project project) {
//		this.projects.add(project);
//	}
//}
//
//	
//
//	
