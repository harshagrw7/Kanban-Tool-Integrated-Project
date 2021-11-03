import axios from "axios";
const PROJECT_API_BASE_URL = "http://localhost:8080/projects";

class ProjectServices{

    getProjects(){
        return axios.get(PROJECT_API_BASE_URL);
    }

    createProject(project){
        return axios.post(PROJECT_API_BASE_URL, project);
    }

    getProjectById(projectId){
        return axios.get(PROJECT_API_BASE_URL + '/' + projectId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(PROJECT_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteProject(projectId){
        return axios.delete(PROJECT_API_BASE_URL + '/' + projectId);
    }
    projectByUserId(userId)
    {
        return axios.get(PROJECT_API_BASE_URL + '/user/'+userId);
    }
    createProjectByUserId(project,userId)
    {
        return axios.post(PROJECT_API_BASE_URL+'/user/'+userId,project)
    }

    getProjectsbyPriority(userId,priority)
    {
        return axios.get(PROJECT_API_BASE_URL+'/priority/'+userId+'/'+priority)
    }
}

export default new ProjectServices()