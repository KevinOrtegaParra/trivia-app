

const PrivacyPolicy = () => {
  return (
    <div className="container mt-5 text-light">
      <div className="card bg-black shadow-lg border border-secondary p-4">
        <h1 className="mb-3 text-center text-warning">Política de Privacidad</h1>
        <p className="text-center text-secondary">
          <strong>Última actualización:</strong> 2025
        </p>

        <h4 className="mt-4 text-warning">1. Información que recopilamos</h4>
        <p className="text-center text-secondary">
          Recopilamos únicamente la información necesaria para el funcionamiento del juego,
          como datos de registro (nombre y correo electrónico) y estadísticas de partida
          (puntuaciones y posición en el ranking).
        </p>

        <h4 className="mt-4 text-warning">2. Uso de la información</h4>
        <p className="text-center text-secondary">
          Usamos los datos para permitir el inicio de sesión, guardar puntuaciones y mejorar
          la experiencia del juego. No compartimos información con terceros.
        </p>

        <h4 className="mt-4 text-warning">3. Cookies y anuncios</h4>
        <p className="text-center text-secondary">
          Este sitio utiliza Google AdSense, que puede recopilar datos anónimos para mostrar
          anuncios personalizados. Consulta las{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noreferrer"
            className="text-warning"
          >
            políticas de publicidad de Google
          </a>{" "}
          para obtener más información.
        </p>

        <h4 className="mt-4 text-warning">4. Contacto</h4>
        <p className="text-center text-secondary">
          Si tienes dudas sobre esta política, escríbenos a{" "}
          <a
            href="mailto:kevinortega@gmail.com"
            className="text-warning fw-bold"
          >
            kevinortega@gmail.com
          </a>.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
