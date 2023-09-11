import React, { useState } from "react";
import { StyledNavbar, StyledNavbarList } from "./Navbar.style.jsx";
import ConsultasLink from "./ConsultasLink/ConsultasLink.jsx";
import ImgBackground from "../../assets/Logo/2-removebg-preview.png";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Theme } from "../../theme/theme.jsx";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { colors, layout } = Theme;

  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(scrollY.get());

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPosition(latest);
  });

  const navbarStyle = {
    backgroundColor:
      scrollPosition !== 0 ? `${colors.shadowsColor}` : "transparent",
    color:
      scrollPosition !== 0 ? `${colors.textTertiary}` : `${colors.textPrimary}`,
    transition: "background-color 0.2s ease-in-out",
  };
  const LogoStyle = {
    backgroundColor:
      scrollPosition !== 0 ? `${colors.backgroundPrimary}` : "transparent",
    transition: "background-color 0.2s ease-in-out",
    cursor: "pointer",
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledNavbar style={navbarStyle}>
      <section>
        <div>
        <Link
        onClick={scrollToTop}
        id="innerLink" to="/">
          <img id="logoNasser" src={ImgBackground} alt="Nas´Ser" style={LogoStyle} />
          <p>Nas´Ser</p>
        </Link>
        </div>
        <div>
          <StyledNavbarList>
            <li>
              <Link
              onClick={scrollToTop}
              to="/">Home</Link>
            </li>
            <li>
              <Link
              onClick={scrollToTop}
              to="/beatriz-freitas">Beatriz Freitas</Link>
            </li>
            <ConsultasLink />
            <li>
              <Link
              onClick={scrollToTop}
              
              preventScrollReset= "true"
              to="/contact">Contato</Link>
            </li>
          </StyledNavbarList>
          <div>
            <label id="checkbox" htmlFor='floatMenu'>
              &#9776;
            </label>
            <input type="checkbox" id="floatMenu"/>
          </div>
        </div>
      </section>
    </StyledNavbar>
  );
};

export default Navbar;
