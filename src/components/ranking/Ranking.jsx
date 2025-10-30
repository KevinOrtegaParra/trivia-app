import { useEffect, useState } from "react";
import { ObtenerRanking, ObtenerUser } from "../../services/userService"
import Table from "./Tablet"
import "./Ranking.css";

export default function Ranking() {
  const [ranking, setRanking] = useState(null);
  const [usuarioActual, setUsuarioActual] = useState(null);

  useEffect(() => {
    cargarRankig()
  }, []);

  const cargarRankig = async () => {
    try {
      const { data: rankingData } = await ObtenerRanking();
      const {data: userData } = await ObtenerUser();
      setRanking(rankingData); // 👈 directo, sin mapear después
      setUsuarioActual(userData);
    } catch (e) {
      console.error(e);
      setError(true);
    }
  };

  console.log(ranking)
  if (ranking === null) return (
    <div className="ranking-container">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div >
  )

  return (
    <div className="ranking-container">
      <h1 className="ranking-title">🏆 Ranking de Jugadores</h1>
      <Table ranking={ranking} usuarioActual={usuarioActual} />
    </div>
  );
}