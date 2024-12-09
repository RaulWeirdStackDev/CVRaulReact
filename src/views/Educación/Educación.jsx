import educacionTec from '../../data/educacionTec.json'

import educacionPed from '../../data/educacionPed.json'

export const Educación = () => {
  return (
    <>
    <div>
    <ul>
    {educacionTec.map((educacionTec) => (
        <li key={educacionTec.id}>
            <h3>{educacionTec.cargo}</h3>
            <h5>{educacionTec.empleador}</h5>
            <p>{educacionTec.fecha}</p>
        </li>


    ))}
    </ul>
</div>

<div>
<ul>
{educacionPed.map((educacionPed) => (
    <li key={educacionPed.id}>
        <h3>{educacionPed.cargo}</h3>
        <h5>{educacionPed.empleador}</h5>
        <p>{educacionPed.fecha}</p>
    </li>


))}
</ul>
</div>
</>
  )
}

