import { errorToast } from "@/utils/toast";
import axios from "axios";

const httpRequest = axios.create({
  baseURL:
    import.meta.env.VITE_REACT_APP_BASE_URL || "http://localhost:8080/api/v1/",
  timeout: 5000,
});

// Interceptor để tự động lấy response.data
httpRequest.interceptors.response.use(
  (response) => response.data, // Chỉ return response.data
  (error) => {
    console.log("API Error:", error);
    errorToast(error.response?.data?.message || "Something went wrong");
    return Promise.reject(error);
  }
);

export const get = (url, options = {}) => httpRequest.get(url, options);
export const post = (url, data, options = {}) =>
  httpRequest.post(url, data, options);
export const put = (url, data, options = {}) =>
  httpRequest.put(url, data, options);
export const del = (url, options = {}) => httpRequest.delete(url, options);

export default httpRequest;
