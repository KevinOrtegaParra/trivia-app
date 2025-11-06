import { atualizarVidalivel } from "../../services/userService"
import { useState } from "react";

export default function Livelife({setVidas, juegoTerminado, navigate}) {
    const [viendoAnuncio, setViendoAnuncio] = useState(false);

    // 🛑 Confirmar salida manual (botón)
    const handleSalir = () => {
        if (!juegoTerminado) {
            const confirmar = window.confirm("⚠️ Si sales ahora, perderás los puntos obtenidos. ¿Deseas salir?");
            if (!confirmar) return;
        }
        navigate("/");
    };

    const ganarvida = async () => {
        try {
            await atualizarVidalivel()
        } catch (e) {
            console.error(e);
            setError(true);
        }
    };

    return (
        <div className="text-center mt-5">
            {!viendoAnuncio ? (
                <>
                    <h2>😢 Te quedaste sin vidas</h2>
                    <button
                        className="btn btn-warning mt-4"
                        onClick={() => {
                            setViendoAnuncio(true);

                            // Simulamos anuncio de 3 segundos
                            setTimeout(() => {
                                setViendoAnuncio(false);
                                ganarvida();
                                setVidas(prev => prev + 1);
                            }, 20000);
                        }}
                    >
                        ❤️‍🩹 recuperar una vida
                    </button>
                    {/* Botón salir */}
                    <button
                        className="btn btn-danger mt-4"
                        onClick={handleSalir}
                    >
                        🚪 Salir del juego
                    </button>
                </>
            ) : (
                <>
                    <div className="progress mt-4" style={{ height: "20px", width: "80%", margin: "0 auto" }}>
                        <div
                            className="progress-bar progress-bar-striped progress-bar-animated bg-warning"
                            style={{ width: "100%" }}
                        ></div>
                    </div>
                    <p className="mt-3">⏳ Cargando... recuperando una vida</p>
                </>
            )
            }
        </div >
    )
}
