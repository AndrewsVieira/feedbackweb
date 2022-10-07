import axios from "axios";


const api = axios.create({
  baseURL: "https://ei2fbpvuug.execute-api.us-east-1.amazonaws.com",
});

export default api;