import React, { Component } from 'react';
import ProjectServices from '../services/ProjectServices';
import '../styles/ProjectDashboard.css';
class ProjectDashboard extends React.Component {
    state={userId:this.props.match.params.userid,
        DoneProjects:[],
        TodoProjects:[],
        OngoingProjects:[],
    }

    
    componentDidMount()
        {
            console.log(this.state.userId)
            ProjectServices.getProjectsbyPriority(this.state.userId,2).then((res)=>{this.setState({TodoProjects:res.data})})
            ProjectServices.getProjectsbyPriority(this.state.userId,1).then((res)=>{this.setState({OngoingProjects:res.data})})
            ProjectServices.getProjectsbyPriority(this.state.userId,3).then((res)=>{this.setState({DoneProjects:res.data})})
            //console.log(this.state.TodoProjects)
        }
    
    render() {  
        return <div>
            <h2 class="project-list-heading">Personal Dashboard</h2>
            <h2 class="status-heading">Done</h2>
            {this.state.DoneProjects.map(project=><div class="list-task-cat" key={project.projectId}>{project.description}<br/>
            <button class="update-list-btn">Update</button>
            <button class="delete-list-btn" >Delete</button></div>
            )}
              <h2 class="status-heading">To Do</h2>
            {this.state.TodoProjects.map(project=><div class="list-task-cat" key={project.projectId}>{project.description}<br/>
            <button class="update-list-btn">Update</button>
            <button class="delete-list-btn">Delete</button></div>
            )}
              <h2 class="status-heading">Ongoing</h2>
            {this.state.OngoingProjects.map(project=><div class="list-task-cat" key={project.projectId}>{project.description}<br/>
            <button class="update-list-btn">Update</button>
            <button class="delete-list-btn">Delete</button></div>
            )}
            {/* <tr>{this.state.TodoProjects.map(project=><td key={project.projectId}>{project.description}</td>)}</tr>
            
            <tr>{this.state.OngoingProjects.map(project=><td key={project.projectId}>{project.description}</td>)}</tr> */}

        </div>;
    }
}
 
export default ProjectDashboard;
//ongoing todo urgent