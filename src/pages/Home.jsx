import logo from '../assets/logo.png'
import { useNavigate } from "react-router-dom";
import Life from "../components/ui/Life"

const Home = () => {
   const navigate = useNavigate();

  const irAlJuego = () => {
    navigate("/game"); // 👈 redirige a la ruta del juego
  };

  return (
    <div className="home-container">
      <header className="home-header">
        <img src={logo} alt="Logo Trivia Escolar" className="home-logo" />
        <h1 className="home-title">¡Bienvenido a Trivia Escolar!</h1>
        <p className="home-description">
          Pon a prueba tus conocimientos y compite con tus compañeros.
          <br />
          ¿Listo para comenzar el desafío?
        </p>
        <button className="home-button" onClick={irAlJuego}>
          🎮 Comenzar Trivia
        </button>
        <Life recargar={false} />
      </header>
    </div>
  );
};

export default Home;