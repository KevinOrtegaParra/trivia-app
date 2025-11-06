import { useEffect, useState } from "react";
import { ObtenerUser, atualizarUsuario } from "../services/userService"
import { ObtenerGrades } from "../services/grades"
import './forms.css'

export default function Perfil() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState(null);
  const [grade, setGrade] = useState("")
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
      const { data: user } = await ObtenerUser()
      setGrades(data); // 👈 directo, sin mapear después
      setName(user.name)
      setGrade(user.grade)
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name.length >= 3 && name.length <= 15) {
        await atualizarUsuario({ name, grade })
        alert("✅ Cambios guardados");
      } else {
        alert("😐El nombre tiene que tener entre 3 a 15 letras");
      }
    } catch (err) {
      alert("No se pudo guardar los cambios");
      console.error("❌ Error en register:", err);
    }
  };

  return (
    <>
      <div style={{ minHeight: "80vh" }}>
        <div >
          <h2 >Perfil</h2>
          <form onSubmit={handleSubmit}>
            <input
              name="nombre"
              type="text"
              placeholder="Nombre"
              value={name}
              onChange={(e) => setName(e.target.value)}

            />

            <select
              name="grade"
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
            >
              {grades.map((grade) => (
                <option key={grade.id || grade.name} value={grade.name}>{grade.name}</option>
              ))}

            </select>
            <button type="submit">guardar cambios</button>
          </form>
        </div>
      </div>
    </>
  );
}