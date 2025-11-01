

const TermsAndConditions = () => {
  return (
     <div className="container mt-5 text-light">
      <div className="card bg-black shadow-lg border border-secondary p-4">
        <h1 className="mb-3 text-center text-warning">Términos y Condiciones</h1>
        <p className="text-center text-secondary">
          <strong>Última actualización:</strong> 2025
        </p>

        <h4 className="mt-4 text-warning">1. Uso del sitio</h4>
        <p className="text-center text-secondary">
          Este sitio fue creado con fines educativos y de entretenimiento. No se permite el
          uso del contenido con fines ilegales o que infrinjan derechos de terceros.
        </p>

        <h4 className="mt-4 text-warning">2. Cuentas de usuario</h4>
        <p className="text-center text-secondary">
          Eres responsable de mantener la confidencialidad de tu cuenta y contraseña, así
          como de todas las actividades que ocurran bajo tu cuenta.
        </p>

        <h4 className="mt-4 text-warning">3. Contenido</h4>
        <p className="text-center text-secondary">
          Todo el contenido (preguntas, textos, imágenes y código) pertenece a{" "}
          <strong>Trivia Escolar</strong>. No puede ser copiado ni redistribuido sin permiso.
        </p>

        <h4 className="mt-4 text-warning">4. Modificaciones</h4>
        <p className="text-center text-secondary">
          Nos reservamos el derecho de modificar estos términos en cualquier momento. Los
          cambios se publicarán en esta página.
        </p>

        <h4 className="mt-4 text-warning">5. Contacto</h4>
        <p className="text-center text-secondary">
          Si tienes dudas sobre estos términos, contáctanos a{" "}
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

export default TermsAndConditions;
