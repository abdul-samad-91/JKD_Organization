import axios from "axios";
import { BASE_URL } from "./apiPaths";

// Create axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      // Client-side only: get token from localStorage
      const accessToken = localStorage.getItem("token");
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    } else {
      // Server-side: read token from cookies, headers, or env
      const accessToken = process.env.NEXT_PUBLIC_API_TOKEN; // example
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        if (typeof window !== "undefined") {
          // Only client can redirect
          window.location.href = "/login";
        } else {
          console.error("Unauthorized on server side");
        }
      } else if (error.response.status === 500) {
        console.error("Server Error");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("Request Timed Out");
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
