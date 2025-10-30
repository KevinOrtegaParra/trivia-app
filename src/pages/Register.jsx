import { useEffect, useState } from "react";
import { registrarUsuario, loginUsuario } from "../services/authService"
import { ObtenerGrades } from "../services/grades"
import { useNavigate } from "react-router-dom";
import './forms.css'

export default function Register() {

  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [grade, setGrade] = useState('')
  const [grades, setGrades] = useState([])

  /*const handleChange = (e) => {
  };*/

  useEffect(() => {
    cargarGrades();
  }, []);

  // 🚀 Cargar grados
  const cargarGrades = async () => {
    try {
      const { data } = await ObtenerGrades();
      setGrades(data); // 👈 directo, sin mapear después
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const responseRegister = await registrarUsuario({ name, email, password, grade });
      const responseLogin = await loginUsuario({ email, password });

      const { token } = responseLogin.data;
      localStorage.setItem("token", token);

      navigate("/")
    } catch (err) {
      alert("Credenciales inválidas");
      console.error("Error en register:", err);
    }
  };

  return (
    <>
      <div style={{minHeight: "100vh"}}>
        <div className="form">
          <h2 >Registro de Usuario</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="nombre"
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required

            />
            <input
              name="email"
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <select
              name="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              required
            >
              <option value="">Selecciona tu grado</option>
              {grades.map((grade) => (
                <option key={grade.id || grade.name} value={grade.name}>{grade.name}</option>
              ))}

            </select>

            <input
              name="password"
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    </>
  );
}