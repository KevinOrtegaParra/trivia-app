import { useState } from 'react';
import { loginUsuario } from "../services/authService"
import { useAuth } from "../components/ui/AuthContext";
import { useNavigate } from "react-router-dom";
import './forms.css'

const Login = () => {

  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUsuario({ email, password });
      const { token } = response.data;

      login(token);
      console.log("Login exitoso:", response.data);

      navigate("/");
    } catch (err) {
      alert("Credenciales inválidas");
      console.error("Error en login:", err);
    }
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <div className='form' >
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
};

export default Login;