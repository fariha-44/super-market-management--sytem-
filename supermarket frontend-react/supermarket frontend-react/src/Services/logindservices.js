import axios from "axios";

const API = "https://localhost:7004/api/User";

export const login = (data) =>
{
    return axios.post(`${API}/login`, data);
};