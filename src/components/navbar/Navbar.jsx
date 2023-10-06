import React, { useEffect, useState } from "react";
import { StyledNavbar } from "./Navbar.style.jsx";
import ImgBackground from "../../assets/Logo/2-removebg-preview.png";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Theme } from "../../theme/theme.jsx";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";

import { ConsultasMap } from "../../Objects.API/Consultas.Map";

/**
 * Renders a navigation bar component for a website.
 *
 * @returns {JSX.Element} The rendered navigation bar component.
 */
const Navbar = () => {
  const { colors } = Theme;
  const consultas = ConsultasMap;
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(scrollY.get());
  const [checkboxValue, setCheckboxValue] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(scrollY.get());
    };

    const unsubscribe = scrollY.onChange(handleScroll);

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    checkboxValue && setCheckboxValue(false);
  };

  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked);
  };

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
                  {consultas.map((consulta, index) => (
                    <li key={index}>
                      <Link
                        onClick={scrollToTop}
                        to={`/contact/${consulta.name}`}
                      >
                        {consulta.name}
                      </Link>
                    </li>
                  ))}
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

