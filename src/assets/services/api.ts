import axios from 'axios';

const api = axios.create({
  baseURL: 'https://xbox-live-server.onrender.com/api'
})


export default api;