import axios from 'axios';

interface userObj {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    cpf: string;
    image: string;
}

axios.defaults.baseURL = 'https://xbox-live-server.onrender.com';
axios.defaults.headers.post["Content-Type"] = "application/json";
const userService = {
    postUser: async (newUser: userObj) => {
    try{
        const req = await axios.post('/user', newUser)
        return req;
    }catch (err){
        alert(err)    
    }
    }
}

export { userService };