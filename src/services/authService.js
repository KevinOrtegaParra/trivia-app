import { axiosConfig } from "../configurations/axiosConfig";
import  { jwtDecode } from "jwt-decode";

// Login
export const loginUsuario = (credenciales = {}) => {
  return axiosConfig.post("login", credenciales, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

export const loginGoogle = (idToken  = {}) => {
  return axiosConfig.post("/auth/google", idToken , {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

// Registro
export const registrarUsuario = (datos = {}) => {
  return axiosConfig.post("users/register", datos, {
    headers: {
      'Content-Type': 'application/json'
    }
  });
};

// Cerrar sesión
export const logoutUsuario = () => {
  localStorage.removeItem("token");
};

export const getUserFromToken = () => {
  const token = localStorage.getItem("token");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);

    const now = Date.now() / 1000;
    if (decoded.exp && decoded.exp < now) {
      localStorage.removeItem("token");
      return null;
    }
    
    return decoded; // aquí vienen email, roles, exp, etc.
  } catch (e) {
    console.error("Token inválido", e);
    return null;
  }
};

export const hasRole = (role) => {
  const user = getUserFromToken();
  return user?.roles?.includes(role);
};
