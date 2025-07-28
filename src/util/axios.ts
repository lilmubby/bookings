import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://booking-com15.p.rapidapi.com/api/v1", // Replace with your API base URL
  timeout: 10000 * 30, // 10 seconds
});

axiosInstance.interceptors.request.use(
  (config) => {
    // You can add headers or modify the request here
    config.headers["x-rapidapi-key"] = process.env.RAPID_API_KEY || "";
    config.headers["x-rapidapi-host"] = process.env.RAPID_API_HOST || "";
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;