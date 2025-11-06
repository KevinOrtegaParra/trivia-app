import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ObtenerPreguntas } from "../../services/questiosService"
import { atualizarVidaLose, ObtenerUser, atualizarpuntos } from "../../services/userService"
import correctSound from '../../assets/correct.mp3';
import wrongSound from '../../assets/wrong.mp3';
import winningSound from '../../assets/winning.mp3';
import Trivia from "./Trivia"
import Livelife from "./Livelife"
import ModalCustom from "./ModalCustom";

export default function TriviaGame() {
    const navigate = useNavigate();

    const [preguntas, setPreguntas] = useState(null);
    const [indiceActual, setIndiceActual] = useState(0);
    const [puntuacion, setPuntuacion] = useState(0);
    const [vidas, setVidas] = useState(0);
    const [mostrarModal, setMostrarModal] = useState(false);
    const [mensajeModal, setMensajeModal] = useState("");
    const [juegoTerminado, setJuegoTerminado] = useState(false);


    useEffect(() => {
        cargarPreguntas();
    }, []);

    // 🚀 Cargar preguntas y vida del jugador
    const cargarPreguntas = async () => {
        try {
            const { data } = await ObtenerPreguntas();
            const user = await ObtenerUser();
            setVidas(user.data.lives)
            setPreguntas(data); // 👈 directo, sin mapear después
        } catch (e) {
            console.error(e);
            setError(true);
        }
    };

    // 💔 Restar una vida
    const perdervida = async () => {
        try {
            await atualizarVidaLose()
        } catch (e) {
            console.error(e);
            setError(true);
        }
    };

    // 🎯 Responder pregunta
    const responder = async (opcionSeleccionada) => {
        const pregunta = preguntas[indiceActual];
        if (opcionSeleccionada === pregunta.correctAnswer) {
            setTimeout(() => setPuntuacion(prev => prev + 2), 50);
            setMensajeModal(`✅ ¡Correcto!\nPuntaje: ${puntuacion + 2}`);

            const audio = new Audio(correctSound);
            audio.play();
            setMostrarModal(true);
        } else {

            setVidas(prev => prev - 1)
            setMensajeModal(`❌ Incorrecto\n❤️ Vidas: ${vidas - 1}`);
            perdervida()
            setMostrarModal(true);
            const audio = new Audio(wrongSound);
            audio.play();
        }

        setTimeout(() => {
            const siguiente = indiceActual + 1;

            if (siguiente >= preguntas.length) {
                const audio = new Audio(winningSound);
                audio.play();

                const puntajeFinal = opcionSeleccionada === pregunta.correctAnswer
                    ? puntuacion + 2
                    : puntuacion;

                atualizarpuntos(puntajeFinal);
                setMensajeModal(
                    `🎉 Trivia terminada. Puntaje: ${puntajeFinal}`
                );
                setJuegoTerminado(true);
                setMostrarModal(true);
            } else {
                setIndiceActual(prev => prev + 1);
                setMostrarModal(false); // 👈 solo lo cierras si aún quedan preguntas
            }
        }, 2000);
    };

    // ⚠️ Advertencia si intenta salir o refrescar
    useEffect(() => {
        const handleBeforeUnload = (e) => {
            if (!juegoTerminado) {
                e.preventDefault();
                e.returnValue = "Si sales ahora, perderás tu progreso y puntaje.";
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        return () => {
            window.removeEventListener("beforeunload", handleBeforeUnload);
        };
    }, [juegoTerminado]);

    //if (error) return <p>Error al cargar las preguntas</p>;
    if (preguntas === null) return <div className="text-center mt-5">Cargando preguntas...</div>;
    //😢 experimental
    if (vidas === 0) return (<Livelife setVidas={setVidas} juegoTerminado={juegoTerminado} navigate={navigate}/>);
    if (preguntas === "") cargarPreguntas();
    const preguntaActual = preguntas[indiceActual];

    return (

        <div className="container text-center mt-5" style={{ minHeight: "80vh" }}>
            <Trivia key={indiceActual} pregunta={preguntaActual} responder={responder} />

            <div className="estado">
                {/*<p>Puntaje: {puntuacion}</p>*/}
                {/*<p>❤️ Vidas: {vidas}</p>*/}
            </div>
            {/* 👇 Modal condicional */}
            {mostrarModal && (
                <ModalCustom
                    mensaje={mensajeModal}
                    juegoTerminado={juegoTerminado}
                    onRestart={() => navigate("/")} // o puedes resetear el estado
                />
            )}
        </div>
    );
}