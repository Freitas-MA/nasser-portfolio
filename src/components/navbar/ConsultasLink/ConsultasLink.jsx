import React from "react";
import { useState, useEffect } from "react";
import { AiOutlineArrowDown } from "react-icons/ai";
import { ConsultasLinkStyle } from "./ConsultasLink.style";
import { Link } from "react-router-dom";

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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <ConsultasLinkStyle>
        <span><Link onClick={scrollToTop}
              to="/consultas">Consultas <AiOutlineArrowDown id="arrowSymbol"/></Link></span>
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
