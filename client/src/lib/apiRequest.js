import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://real-estate-full-stack-95w7.onrender.com",
  withCredentials: true,
});

export default apiRequest;
