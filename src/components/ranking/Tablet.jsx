export default function Table({ ranking, usuarioActual }) {

  if (!Array.isArray(ranking) || ranking.length === 0) {
    return (
      <div className="text-center mt-5">
        <h5>No hay jugadores en el ranking todavía.</h5>
      </div>
    );
  }

  return (
    <div>
      <table className="ranking-table">
        <thead>
          <tr>
            <th>Posición</th>
            <th>Jugador</th>
            <th>Puntaje</th>
          </tr>
        </thead>
        <tbody>
          {ranking.map((jugador, index) => (
            <tr key={index} className={jugador.id === usuarioActual.id ? "mi-posicion" : ""}>
              <td>{index + 1}</td>
              <td>{jugador.name}</td>
              <td>{jugador.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

