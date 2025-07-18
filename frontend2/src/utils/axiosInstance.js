
import axios from "axios";

const axiosInstance = axios.create({
  // baseURL: process.env.REACT_APP_API_URL || "http://localhost:8000",
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true, 
});

export default axiosInstance;
