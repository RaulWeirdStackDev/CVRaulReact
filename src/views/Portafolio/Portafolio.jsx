import portafolio from '../../data/portafolio.json'
import './portafolio.css'

export const Portafolio = () => {
  return (
    <div className="portafolio">

            <ul>
            {portafolio.map((portafolio)=>(
                <li key={portafolio.id}>
                    <img src={portafolio.img} alt={portafolio.title} />
                    <h3>{portafolio.title}</h3>
                    <p>{portafolio.desc}</p>
                </li>


            ) 
        )}
        </ul>

    </div>
  )
}

