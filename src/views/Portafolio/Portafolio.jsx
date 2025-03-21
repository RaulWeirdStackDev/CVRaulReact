import portafolio from "../../data/portafolio.json";
import "./portafolio.css";

export const Portafolio = () => {
  return (
    <div className="portafolio">
      <ul>
        {portafolio.map((portafolio) => (
          <li key={portafolio.id} className="portEle">
            <img src={portafolio.img} alt={portafolio.title} />
            <h3 className="portTitle">{portafolio.title}</h3>
            <p className="portDesc">{portafolio.desc}</p>
            <a href={portafolio.link} target="_blank">
              <strong> Mira este proyecto aquí</strong>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
