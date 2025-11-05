import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ObtenerGrades } from "../services/grades"
import { atualizarUsuario } from "../services/userService"

export default function CompletarPerfil({ user }) {
    const [grade, setGrade] = useState("");
    const [grades, setGrades] = useState([])
    const [mensaje, setMensaje] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        cargarGrades();
    }, );

    const cargarGrades = async () => {
        try {
            const { data } = await ObtenerGrades();
            setGrades(data); // 👈 directo, sin mapear después
        } catch (e) {
            console.error(e);
            setError(true);
        }
    };

    const handleGuardar = async () => {
        if (!grade) {
            setMensaje("Por favor selecciona un grado.");
            return;
        }

        try {
            await atualizarUsuario({ grade: grade });
            setMensaje("✅ Grado actualizado correctamente.");
            setTimeout(() => navigate("/"), 1500);
        } catch (e) {
            console.error(e);
            setMensaje("❌ Error al guardar el grado.");
        }
    };

    return (
        <div className="container mt-5 text-center" style={{ minHeight: "80vh" }}>
            <h2>Completa tu perfil</h2>
            <p>Selecciona tu grado para continuar:</p>

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

            <button className="btn btn-primary mt-3" onClick={handleGuardar}>
                Guardar
            </button>

            {mensaje && <p className="mt-3">{mensaje}</p>}
        </div>
    );
}