import React, { Component } from 'react';
import UserServices from '../services/UserServices';
import '../styles/LoginPage.css';
class LoginPage extends React.Component {
    state={input:{},
    valid:""
}

    handleChange=(event)=>{
        let input = this.state.input;
        //console.log(event.target.name,event.target.value)
        input[event.target.name] = event.target.value;
        this.setState({input});

    }

    validateLogin=(e)=>{
        e.preventDefault();
        let input = this.state.input
        if(typeof input['name']=="undefined" || typeof input['password']=="undefined")
        //console.log("undefined")
        {
            this.setState({valid:"Undefined Inputs"})
        }
        else
        {
            //console.log(input["name"])
            UserServices.getUserByName(input["name"]).then(res=>{
                if(res.data.userPassword==input['password'])  //Password Matches
                {
                //this.props.history.push("/projects")
                var userId = res.data.userId
                this.props.history.push(`/projects/user/${userId}`);
                }

                else
                this.setState({valid:"Invalid credentials"})
            })

        }


    }


    render() { 

        return <div>
            <h2 class="login-heading">Login</h2>
            <form class="login-form">
        <label>UserName</label>
        <input type="text" placeholder="UserName" name="name" value={this.state.input.name} onChange={this.handleChange}></input><br/>
        <label>Password</label>
        <input type="password" placeholder="Password" name="password" value={this.state.input.password} onChange={this.handleChange}></input><br/>
        <button onClick={this.validateLogin}>LogIn</button>
        <p>{this.state.valid}</p>
    </form></div>;
    }
}
 
export default LoginPage;