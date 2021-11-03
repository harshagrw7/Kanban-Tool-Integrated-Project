import React, { Component } from 'react';
import '../styles/Homepage.css';
import Nav from './Navbar' 
class HomePage extends React.Component {
    Signup=()=>{
        this.props.history.push("/signup");
    }
    
    Login=()=>{
        this.props.history.push("/login");
    }
    

    render() { 
        return <div class="page-container">
            <nav class="header">
                <button class="button-home">Project Management Tool</button>
                    <div class="nav-items">
                        <button class="link-btn-sign-up" onClick={this.Signup}>SignUp</button>
                        <button class="link-btn-login" onClick = {this.Login}>Login</button>
                    </div>
            </nav>
            {/* <Nav></Nav> */}

            <div class="button-container">
            <button class="sign-up-btn" onClick={this.Signup}>SignUp</button>
            <button class="login-btn" onClick = {this.Login}>Login</button>
            </div>
        </div>;
    }
}
 
export default HomePage;