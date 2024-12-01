import './Perfil.css'

const Perfil = () => {
  return (
    <>
    <article className="características mt-5">
      <h2>Perfil Profesional</h2>
      <div className="contenedor">
        <div className="icono">
          <i className="fa-solid fa-chalkboard-user"></i>
          <p>Profesor de inglés</p>
        </div>

        <div className="icono">
          <i className="fa-solid fa-database"></i>
          <p>TNS Analista Programador</p>
        </div>

        <div className="icono">
          <i className="fa-solid fa-laptop-code"></i>
          <p>Desarrollador Fullstack</p>
        </div>
      </div>
    </article>
    </>
  )
}

export default Perfil