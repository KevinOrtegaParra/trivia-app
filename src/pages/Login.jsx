import { useState } from 'react';
import { loginUsuario, loginGoogle } from "../services/authService"
import { ObtenerUser } from "../services/userService"
import { useAuth } from "../components/ui/AuthContext";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
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

  const handleGoogleLoginSuccess = async (credentialResponse) => {
    const idToken = credentialResponse.credential;
    try {
      const response = await loginGoogle({ idToken });
      const { jwt } = response.data;

      login(jwt); // guarda el token en el contexto
      console.log("Login con Google exitoso:", response.data);

      const userResponse = await ObtenerUser();
      const user = userResponse.data;

      console.log("Usuario logeado con Google:", user);

      // 👉 Verificar si tiene grado
      if (!user.grade) {
        navigate("/completarPerfil"); // redirige a página para elegir grado
      } else {
        navigate("/"); // ya tiene grado, lo llevas al home o juego
      }

      //navigate("/");
    } catch (error) {
      console.error("Error en login con Google:", error);
      alert("Error al iniciar sesión con Google");
    }
  };

  return (
    <div style={{ minHeight: "80vh" }}>
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
          <button className="login-Button" type="submit">Iniciar Sesión</button>
          <div style={{ marginTop: "20px", textAlign: "center" }}>
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={() => console.log("Error en el login con Google")}
              theme="outline"
              size="large"
              shape="pill"
              text="continue_with"
              logo_alignment="left"

            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;