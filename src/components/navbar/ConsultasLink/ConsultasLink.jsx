import React from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { ConsultasLinkStyle } from "./ConsultasLink.style";

export default function ConsultasLink() {
  return (
    <ConsultasLinkStyle>
        Consultas <AiOutlineArrowDown />
        <div id="subMenu">
          <ul>
            <li>Leitura de Aura</li>
            <li>Constelacoes Familiares</li>
            <li>Reiki</li>
            <li>Programa Re-Nas´Ser</li>
          </ul>
        </div>
    </ConsultasLinkStyle>
  );
}
