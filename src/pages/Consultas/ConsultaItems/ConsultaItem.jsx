import React from "react";
import { useParams } from "react-router-dom";
import { StyledConsultaItem } from "./ConsultaItem.style";
import { Background } from "../../../components";

export default function ConsultaItem() {
  const { id } = useParams();
  return (
    <StyledConsultaItem>
        <Background/>
      <h1>Esta e minha pagina de consulta item page: {id}</h1>
    </StyledConsultaItem>
  );
}
