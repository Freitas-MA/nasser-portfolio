import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { ConsultasLinkStyle } from "./ConsultasLink.style";

const ConsultasLink = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', getScreenWidth);
    return () => {
      window.removeEventListener('resize', getScreenWidth);
    };
  }, []);

  console.log(screenWidth);
  
  return (
    <ConsultasLinkStyle>
        <span>Consultas <AiOutlineArrowDown /></span>
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

export default ConsultasLink;




// ! New update!
