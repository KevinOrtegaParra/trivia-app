export default function Trivia({ pregunta, responder }) {
  if (!pregunta) return null;

  return (
    <div className="p-4 shadow-sm">
      <h4>{pregunta.questionText}</h4>
      <div className="mt-3">
        {pregunta.options.map((opcion, i) => (
          <button
            key={i}
            className="btn btn-outline-primary m-2"
            onClick={() => responder(opcion)}
          >
            {opcion}
          </button>
        ))}
      </div>
    </div>
  );
}
