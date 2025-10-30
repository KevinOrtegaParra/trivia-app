import { useEffect, useState } from "react";
import { ObtenerUser } from "../../services/userService"

export default function Life({ recargar }) {

    const [vida, setVida] = useState(-1);
    const [error, setError] = useState(false);

    useEffect(() => {
        cargarvida();
    }, []);

    const cargarvida = async () => {
        try {
            const { data } = await ObtenerUser();
            setVida(data.lives); // 👈 directo, sin mapear después
        } catch (e) {
            console.error(e);
            setError(true);
        }
    };

    // 👇 Si le pasas `recargar` desde el juego cuando pierde una vida:
    useEffect(() => {
        cargarvida();
    }, [recargar]);

    if(error)return " "

    return (
        vida === 0 - 1 ? <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
        </div>
            : <p>❤️ Vidas: {vida}</p>
    )
}