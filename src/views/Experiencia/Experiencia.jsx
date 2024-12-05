import experiencia from '../../data/experiencia.json'
import './Experiencia.css'

const Experiencia = () => {
  return (
    <div>
        <ul>
        {experiencia.map((experiencia) => (
            <li key={experiencia.id}>
                <h3>{experiencia.cargo}</h3>
                <h5>{experiencia.empleador}</h5>
                <p>{experiencia.fecha}</p>
            </li>


        ))}
        </ul>
    </div>
  )
}

export default Experiencia

