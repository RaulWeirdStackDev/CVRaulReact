import { useState, useEffect } from "react";
import experiencia from "../../data/experiencia.json";
import "./experiencia.css";
import playerImage from "/raulBg.png"; // Asegúrate de importar la imagen

export const Experiencia = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 }); // Posición inicial
  const speed = 10; // Velocidad del movimiento

  useEffect(() => {
    const handleKeyDown = (event) => {
      setPosition((prev) => {
        let newX = prev.x;
        let newY = prev.y;

        if (event.key === "ArrowUp") newY -= speed;
        if (event.key === "ArrowDown") newY += speed;
        if (event.key === "ArrowLeft") newX -= speed;
        if (event.key === "ArrowRight") newX += speed;

        return { x: newX, y: newY };
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div className="experiencia">
      <ul>
        {experiencia.map((exp) => (
          <li key={exp.id}>
            <h3>{exp.cargo}</h3>
            <h5>{exp.empleador}</h5>
            <p>{exp.fecha}</p>
          </li>
        ))}
      </ul>

      {/* Imagen con movimiento */}
      <img
        src={playerImage}
        alt="Jugador"
        style={{
          position: "absolute",
          top: `${position.y}px`,
          left: `${position.x}px`,
          width: "50px", // Ajusta el tamaño
          height: "50px",
        }}
      />
    </div>
  );
};
