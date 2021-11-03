import React, { Component } from 'react';
import ProjectServices from '../services/ProjectServices';
import '../styles/CreateProject.css';
import UserServices from '../services/UserServices';
class CreateProject extends React.Component {
    state={
        projectId: this.props.match.params.id,
        projectName:"",
        description:"",
        priority:3,
        userType:2,
        // adminId:this.props.match.params.userid,
        userId:this.props.match.params.userid,
        users:[]
    }

    changeProjectNameHandler=(event)=>{
        this.setState({projectName:event.target.value});
    }
    changeProjectDescriptionHandler=(event)=>{
        //console.log(event.target.value);
        console.log(this.props)
        this.setState({description:event.target.value})
    }
    changePriorityHandler=(event)=>{
        this.setState({priority:event.target.value})
    }
    changeUserHandler=(event)=>{
        console.log("1",event.target.value)
        this.setState({userId:event.target.value})
        console.log(this.state.userId)
    }

    saveProject=(e)=>{
        e.preventDefault();
        //console.log("here",this.props)
        //ProjectServices.createProject(this.state).then(res=>{this.props.history.push('/projects')});
        console.log(this.state.userId)
        var project = {projectId:this.state.projectId,projectName:this.state.projectName,description:this.state.description,priority:this.state.priority}
        ProjectServices.createProjectByUserId(project,this.state.userId).then(res=>{
            this.state.userType===2?this.props.history.push(`/projects/user/${this.state.userId}`):this.props.history.push(`/projects/${this.state.userId}`)})////////
        // this.setState({state:this.state});

    }
    cancel=(e)=>{
        e.preventDefault();
        this.props.history.push(`/projects/user/${this.state.userId}`);

    }

    componentDidMount(){
        UserServices.getUserById(this.state.userId).then(res=>this.setState({userType:res.data.userType}))
        if(typeof this.state.projectId!=="undefined"){
        ProjectServices.getProjectById(this.state.projectId).then( (res) =>{
            let projectOld = res.data;
            this.setState({projectName:projectOld.projectName,description:projectOld.description,priority:projectOld.priority
            });
        });
    }

        UserServices.getAllUsers().then(res=>this.setState({users:res.data}))

    }


    render() { 
        return (<div><h2 class="project-form-heading">Project Form</h2>
        <form class="create-project-form">
            <h3>Create New Project</h3>
            <label>Project Name</label>
            <input type="text" placeholder="Project Name" name= "projectName" value={this.state.projectName} onChange = {this.changeProjectNameHandler}/><br/>
            <label>Project Description</label>
            <input type="text" placeholder="Project Description" name= "Description" value={this.state.description} onChange = {this.changeProjectDescriptionHandler}/><br/>
            {this.state.userType===1  && <label>User</label>}
            {/* <input type="number" placeholder="Project Priority" name="priority" value={this.state.priority}  onChange={this.changePriorityHandler}/><br/> */}
            {this.state.userType===1  && <select class="select-state" name="user" value={1} onChange={this.changeUserHandler}>
                {this.state.users.map(user=><option value={user.userId}>{user.userName}</option>)}
            </select>}
            <label>Status</label>
            <select class="select-state" name="priority" value={this.state.priority} onChange={this.changePriorityHandler}>

            <option value={2}>Todo</option>
            <option value={3}>Done</option>
            <option value={1}>OnGoing</option>
            </select>
            <div class="action-btn-container">
            <button class="submit-btn" onClick={this.saveProject}>Submit</button>
            <button class="cancel-btn" onClick = {this.cancel}>Cancel</button>
            </div>
            </form>

            </div>);
    }
}
 
export default CreateProject;