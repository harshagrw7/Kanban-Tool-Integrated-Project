import React, { Component } from 'react';
class Nav extends React.Component {

    Logout=()=>{
        console.log(this.props)
    }

    render() { 
        return <div>
             <nav class="header">
                <button class="button-home">Project Management Tool</button>
                    <div class="nav-items">
                        <button class="link-btn-sign-up" onClick={this.Logout}>Log Out</button>
                    </div>
            </nav>
        </div>;
    }
}
 
export default Nav;