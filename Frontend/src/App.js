import logo from './logo.svg';
import './App.css';
import ListProjects from './components/ListProjects';
import CreateProject from './components/CreateProject';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <div >
        <Switch>
          <Route exact path = "/" component = {ListProjects}/>
          <Route path = "/projects" component = {ListProjects}/>
          <Route exact path = "/add-project" component = {CreateProject}/>
          <Route path = "/add-project/:id" component = {CreateProject}></Route>
          {/* <ListProjects/> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
