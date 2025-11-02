
export default function ModalCustom({ mensaje, juegoTerminado, onRestart }) {
  return (
    <div
      className="modal fade show d-block"
      tabIndex="-1"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center p-4">
          <h4>{mensaje}</h4>

          {/* Si el juego terminó, mostramos el botón para reiniciar */}
          {juegoTerminado ? (
            <button className="btn btn-primary mt-3" onClick={onRestart}>
              Volver al inicio
            </button>
          ) : (""
          )}
        </div>
      </div>
    </div>
  );
}
