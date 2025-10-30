import { Navigate } from "react-router-dom";
import { getUserFromToken, hasRole } from "../services/authService";

const ProtectedRoute = ({ children, roles }) => {
  const token = localStorage.getItem("token");
  console.log(token);

  if (!token) {
    // Si no hay token -> redirige al login
    return <Navigate to="/login" replace />;
  } 

  if (roles && !roles.some((r) => hasRole(r))) {
    // Si está autenticado pero no tiene el rol requerido
    return <Navigate to="/unauthorized" />;
  }
  
  // Si hay token -> renderiza el componente hijo
  return children;
};

export default ProtectedRoute;
