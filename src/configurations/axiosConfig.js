import axios from "axios";

export const axiosConfig = axios.create({
    baseURL:  import.meta.env.VITE_BASE_URL,
    headers: {
      "Content-Type": "application/json"
    }
})

// Interceptor para agregar el token a cada petición
axiosConfig.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});