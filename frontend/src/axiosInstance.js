import axios from "axios";

const BASE_URL = "http://localhost:8000/api/test";

// you would add your token here if authroization was done

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
