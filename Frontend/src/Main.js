// import ListProjects from './components/ListProjects';
// import CreateProject from './components/CreateProject';
import Signup from './components/Signup'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import ListProjects from './components/ListProjects'
import CreateProject from './components/CreateProject'
import ProjectDashboard from './components/ProjectDashboard'
import Nav from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css' 
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function Main() {
  return (
    <Router>
      <div >
        <Switch>
          <Route exact path = "/" component = {HomePage}/>
          <Route exact path = "/login" component = {LoginPage}/>
          <Route exact path = "/signup" component = {Signup}/>
          <Route exact path = "/add-project/user/:userid" component = {CreateProject}/>
          <Route exact path = "/add-project/:userid/:id" component = {CreateProject}></Route>
          <Route exact path = "/projects/user/:userid" component = {ListProjects}></Route>
          <Route exact path = "/projects/:userid" component = {ListProjects}></Route>
          <Route exact path = "/dashboard/:userid" component = {ProjectDashboard}></Route>
          
          {/* <ListProjects/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default Main;