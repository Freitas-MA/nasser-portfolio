import React from "react";
import { useParams } from "react-router-dom";
import { StyledConsultaItem } from "./ConsultaItem.style";
import { Background } from "../../../components";
import { ConsultasMap } from "../../../Objects.API/Consultas.Map";

export default function ConsultaItem() {
  const { id } = useParams();
  const consulta = ConsultasMap[id]; // Access the object from ConsultasMap using id
  return (
    <StyledConsultaItem>
      <Background />
      <section>
        <img src={consulta.image} alt={consulta.name} />
        <div>
          <h1>{consulta.name}</h1>
          {/* Display the title property of the object */}
          <p>{consulta.description}</p>
          {/* Display the description property of the object */}
        </div>
      </section>
    </StyledConsultaItem>
  );
}
