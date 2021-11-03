import React, { Component } from 'react';
import UserServices from '../services/UserServices';
import '../styles/SignupPage.css';
class Signup extends React.Component {
    state={input:{userType:2}}

    handleChange=(event)=>{
        let input = this.state.input;
        //console.log(event.target.name,event.target.value)
        input[event.target.name] = event.target.value;
        this.setState({input});

    }

    RegisterUser=(e)=>{
        e.preventDefault();
        UserServices.addUser(this.state.input).then((res)=>{this.props.history.push("/")});
    }

    render() { 
        
        return <div>
            <h2 class="signup-heading">SignUp</h2>
            <form class="sign-up-form">
                <label>UserName</label>
                <input type="text" placeholder="User Name" name= "userName" value={this.state.input.userName} onChange = {this.handleChange}/><br/>
                <label>Email Id</label>
                <input type="text" placeholder="EmailId" name= "userEmail" value={this.state.input.userEmail} onChange = {this.handleChange}/><br/>
                <label>Password</label>
                <input type="password" placeholder="User Password" name= "userPassword" value={this.state.input.userPassword} onChange = {this.handleChange}/><br/>
                <label>User Type</label>
                <select class="select-state" name="userType" value={this.state.input.userType} onChange={this.handleChange}>
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                </select>
                <button onClick={this.RegisterUser}>SignUp</button>
            </form>
        </div>;
    }
}
 
export default Signup;