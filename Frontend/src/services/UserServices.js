import axios from "axios";
import ProjectDashboard from "../components/ProjectDashboard";
const PROJECT_API_BASE_URL = "http://localhost:8080/users";

class UserServices{

    getUserByName(name)
    {
       return axios.get(PROJECT_API_BASE_URL+'/'+name);
    }

    addUser(user)
    {
        return axios.post(PROJECT_API_BASE_URL,user);
    }

    getUserById(id)
    {
        return axios.get(PROJECT_API_BASE_URL+'/id/'+id);
    }
    getAllUsers()
    {
        return axios.get(PROJECT_API_BASE_URL)
    }
}

export default new UserServices();