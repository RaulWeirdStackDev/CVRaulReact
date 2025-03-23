import './footer.css'

export const Footer = () => {
  return (
    <>
    <footer
      className="bg-light d-flex flex-column align-items-center fs-5 border-top border-top-5 border-bottom border-bottom-5 mt-4"
    >
      <p>© 2024 Creado por Raúl Rodríguez - Soluciones Informáticas.</p>
      <div className="contenedor2 mb-3">
        <div>
          <a href="https://wa.me/56972033734" target="_blank"
            ><i className="fa-brands fa-whatsapp"></i> 
            </a>
        </div>

        <div>
          <a
            href="https://www.linkedin.com/in/raulrc86/"
            target="_blank"
            ><i className="fa-brands fa-linkedin"></i>
            </a>
        </div>

        <div>
          <a href="https://github.com/RaulRC86" target="_blank"
            ><i className="fa-brands fa-github"></i>
            </a>
        </div>
      </div>
    </footer>
    </>
  )
}

