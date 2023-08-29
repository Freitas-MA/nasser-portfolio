import React, { useState } from "react";
import { StyledNavbar, StyledNavbarList } from './Navbar.style.jsx'
import ConsultasLink from "./ConsultasLink.jsx";
import ImgBackground from '../../assets/Logo/2-removebg-preview.png'
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Theme } from "../../theme/theme.jsx";

const Navbar = () => {
  const { colors, layout } = Theme;

  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(scrollY.get());

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPosition(latest);
  });

  const navbarStyle = {
    backgroundColor: scrollPosition !== 0 ? `${colors.shadowsColor}` : "transparent",
    color: scrollPosition !== 0 ? `${colors.textTertiary}` : `${colors.textPrimary}`,
    transition: "background-color 0.2s ease-in-out",
  };
  const LogoStyle = {
    backgroundColor: scrollPosition !== 0 ? `${colors.backgroundPrimary}` : "transparent",
    transition: "background-color 0.2s ease-in-out",
    cursor: "pointer",
  }

  return (
    <StyledNavbar style={navbarStyle}>
      <section>
        <div        >
          <img
          onClick={() => {window.location.href = "#Home";}}
          src={ImgBackground} alt="Nas´Ser" style={LogoStyle} />
          <p
          onClick={() => {window.location.href = "#Home";}}
          style={{cursor: 'pointer'}}
          >Nas´Ser</p>
        </div>
        <div>
          <StyledNavbarList>
            <li><a href="#Home">Home</a></li>
            <li>Beatriz Freitas</li>
            <ConsultasLink />
            <li>Contacto</li>
          </StyledNavbarList>
        </div>
      </section>
    </StyledNavbar>
  );
};

export default Navbar;
