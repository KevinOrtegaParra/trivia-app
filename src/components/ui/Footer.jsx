export default function Footer() {
  return (
    <div className="container " >
      <footer className="py-3 my-4  bg-black" >
        <ul className="nav justify-content-center border-bottom pb-3 mb-3" >
          <li className="nav-item"><a href="/privacy" target="_blank" rel="noreferrer" className="text-light mx-2">Política de Privacidad</a></li>
          <li className="nav-item"><a href="/terms" target="_blank" rel="noreferrer" className="text-light mx-2">Términos y Condiciones</a> </li>
          <li className="nav-item"><a href="/contact" target="_blank" rel="noreferrer" className="text-light mx-2">Contacto</a></li>
          <li className="nav-item"><a href="https://github.com/KevinOrtegaParra" target="_blank" rel="noreferrer" className="text-light mx-2">
            GitHub
          </a></li>
        </ul>
        <p className="text-center text-light fw-bold">🎮 Trivia Escolar</p>
        <p className="text-center text-light" >Sigue aprendiendo y divirtiéndote</p>
        <p className="text-center text-light mt-3 mb-0">© {new Date().getFullYear()} Kevin Ortega Parra</p>
      </footer>
    </div>

  )
}