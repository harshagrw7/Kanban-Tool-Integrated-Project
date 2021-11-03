import React, { Component } from 'react';
import ProjectServices from '../services/ProjectServices';
import UserServices from '../services/UserServices';
import '../styles/ListProjects.css';
import Nav from './Navbar';
class ListProjects extends React.Component {
    state={
        allProjects:[],
        projects:[],
        userId: this.props.match.params.userid,
        userType :2 
    }

    addProject=()=>{
        //console.log(this.props)
        this.props.history.push(`/add-project/user/${this.state.userId}`);

    }
     updateProject=(id)=>{
        this.props.history.push(`/add-project/${this.state.userId}/${id}`);
     }

    componentDidMount()
    {
        //ProjectServices.getProjects().then(res=>this.setState({projects:res.data}));
        console.log("userId",this.state.userId)
        UserServices.getUserById(this.state.userId).then(res=>this.setState({userType:res.data.userType}))
        console.log("userType",this.state.userType)
        ProjectServices.projectByUserId(this.state.userId).then(res=>this.setState({projects:res.data}))
        ProjectServices.getProjects().then(res=>this.setState({allProjects:res.data}))
        console.log("userType",this.state.userType)
        
        
        //console.log("lol",this.state.userType)
    }
    deleteProject=(id)=>
    {
        ProjectServices.deleteProject(id).then(res=>{
        this.setState({projects:this.state.projects.filter(project=>project.projectId!=id)})});
    }
    getDashboard=()=>{
        this.props.history.push(`/dashboard/${this.state.userId}`);
    }
    render() { 
        //console.log("projects",this.state.projects)
        return <div>
            {/* <Nav/> */}
            <h2 class="project-list-heading">Project List</h2>
            <button class="dashboard-btn" onClick={()=>this.getDashboard(this.state.userId)}>Project Dashboard</button>
            {this.state.userType===1 && <div class="column-box">{this.state.allProjects.map((project)=>
                <div class="col-sm">{project.projectName}<br/>
            <button class="update" onClick={()=>this.updateProject(project.projectId)}>Update</button>
            {this.state.userType===1 && <button class="delete" onClick={()=>this.deleteProject(project.projectId)}>Delete</button>}
            </div>)}</div>}

            {this.state.userType===2 && <div class="column-box">{this.state.projects.map((project)=>
                <div class="col-sm">{project.projectName}<br/>
            <button class="update" onClick={()=>this.updateProject(project.projectId)}>Update</button>
            {this.state.userType===1 && <button class="delete" onClick={()=>this.deleteProject(project.projectId)}>Delete</button>}
            </div>)}</div>}
            {this.state.userType===1 &&<button class="add-project" onClick={()=>this.addProject()}>Add Project</button>}
            {/* <button class="add-project" onClick={()=>this.addProject()}>Add Project</button>     */}
            {console.log("inside render",this.state.userType)}

        </div>;
    }
}
 
export default ListProjects;