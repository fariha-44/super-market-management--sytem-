import axios from "axios";

const API= axios.create({
    baseURL: "https://localhost:7004/api/",
  
});

export default API;

