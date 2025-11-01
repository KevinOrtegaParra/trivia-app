

const Contact = () => {
    return (
        <div className="container mt-5 text-light">
            <div className="card bg-black shadow-lg border border-secondary p-4">
                <h1 className="text-center mb-4 text-warning">Contacto</h1>
                <p className="text-center text-secondary">
                    ¿Tienes dudas, sugerencias o encontraste un error en el juego?
                </p>
                <p className="text-center text-secondary">
                    Escríbenos y te responderemos lo antes posible.
                </p>

                <div className="text-center mt-4">
                    <a
                        href="mailto:kevinortega@gmail.com"
                        className="btn btn-warning fw-bold px-4 py-2 rounded-pill"
                    >
                        ✉️ Enviar correo
                    </a>
                </div>

                <p className="text-center mt-4 mb-0 text-secondary">
                    También puedes seguir el proyecto en GitHub:{" "}
                    <a
                        href="https://github.com/KevinOrtegaParra"
                        target="_blank"
                        rel="noreferrer"
                        className="text-warning fw-bold"
                    >
                        KevinOrtegaParra
                    </a>
                </p>
            </div>
        </div>
    );
};

export default Contact;
