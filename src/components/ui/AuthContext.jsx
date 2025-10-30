import { createContext, useContext, useState, useEffect } from "react";
import { getUserFromToken, logoutUsuario } from "../../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // cuando la app carga -> revisamos si hay token
    const u = getUserFromToken();
    setUser(u);
  }, []);

  const login = (token) => {
    localStorage.setItem("token", token);
    const u = getUserFromToken();
    setUser(u);
  };

  const logout = () => {
    logoutUsuario();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para usarlo fácil
export const useAuth = () => useContext(AuthContext);