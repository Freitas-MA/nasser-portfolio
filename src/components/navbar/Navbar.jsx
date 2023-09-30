import React, { useEffect, useState } from "react";
import { StyledNavbar } from "./Navbar.style.jsx";
import ImgBackground from "../../assets/Logo/2-removebg-preview.png";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Theme } from "../../theme/theme.jsx";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";

import { ConsultasMap } from "../../Objects.API/Consultas.Map";

const Navbar = () => {
  const { colors, layout } = Theme;
  const consultas = ConsultasMap;
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(scrollY.get());

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrollPosition(latest);
  });

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
    checkboxValue && setCheckboxValue(false);
  };

  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenWidth);
    return () => {
      window.removeEventListener("resize", getScreenWidth);
    };
  }, []);

  const [checkboxValue, setCheckboxValue] = useState(false);

  console.log(checkboxValue);

  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked);
  };

  // TODO --- Solve the probleme with the checkbox and the responsive menu

  return (
    <StyledNavbar
      scrollposition={scrollPosition}
      checkboxvalue={checkboxValue.toString()}
    >
      <section>
        <div>
          <Link onClick={scrollToTop} id="innerLink" to="/">
            <img
              className="logo"
              src={ImgBackground}
              alt="Nas´Ser"
              style={LogoStyle}
            />
            <p>Nas´Ser</p>
          </Link>
        </div>
        <div id="menuList">
          <ul id="responsiveMenu">
            <li>
              <Link onClick={scrollToTop} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link onClick={scrollToTop} to="/beatriz-freitas">
                Beatriz Freitas
              </Link>
            </li>
            <li id="subMenu">
              <span>
                <Link onClick={scrollToTop} to="/consultas">
                  Consultas <AiOutlineArrowDown id="arrowSymbol" />
                </Link>
              </span>
              <div id="innerMenu">
                <ul id="floatMenu">
                  {consultas.map((consulta, index) => {
                    return (
                      <li key={index}>
                        <Link
                          onClick={scrollToTop}
                          to={`/contact/${consulta.name}`}
                        >
                          {consulta.name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </li>
            <li>
              <Link
                onClick={scrollToTop}
                preventScrollReset="true"
                to="/contact"
              >
                Contato
              </Link>
            </li>
          </ul>
          <input
            type="checkbox"
            id="checkBox"
            checked={checkboxValue}
            onChange={handleCheckboxChange}
          />
          <label id="burgerMenu" htmlFor="checkBox">
            <FaBars />
          </label>
        </div>
      </section>
    </StyledNavbar>
  );
};

export default Navbar;
