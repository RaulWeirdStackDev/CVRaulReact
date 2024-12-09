import educacionTec from '../../data/educacionTec.json';
import educacionPed from '../../data/educacionPed.json';

export const Educacion = () => {
  return (
    <>
      <div>
        <h2>Formación Técnica</h2>
        <ul>
          {educacionTec.map((educacion) => (
            <li key={educacion.id}>
              <h3>{educacion.tipo}: {educacion.nombre}</h3>
              <h5>{educacion.entidad}</h5>
              <p>{educacion.fecha}</p>
              <p>{educacion.desc}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Formación Pedagógica</h2>
        <ul>
          {educacionPed.map((educacion) => (
            <li key={educacion.id}>
              <h3>{educacion.tipo}: {educacion.nombre}</h3>
              <h5>{educacion.entidad}</h5>
              <p>{educacion.fecha}</p>
              <p>{educacion.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};


