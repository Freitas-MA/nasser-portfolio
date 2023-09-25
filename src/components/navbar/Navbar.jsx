import React, { useEffect, useState } from "react";
import { StyledNavbar } from "./Navbar.style.jsx";
import ConsultasLink from "./ConsultasLink/ConsultasLink.jsx";
import ImgBackground from "../../assets/Logo/2-removebg-preview.png";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Theme } from "../../theme/theme.jsx";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";

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

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const getScreenWidth = () => {
    setScreenWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", getScreenWidth);
    return () => {
      window.removeEventListener("resize", getScreenWidth);
    };
  }, []);

  const [activeMenu, setActiveMenu] = useState(false);

  const resizeClass = screenWidth <= 768 ? "mobile" : "desktop";

  const [checkboxValue, setCheckboxValue] = useState(false);

  const handleCheckboxChange = (event) => {
    setCheckboxValue(event.target.checked);
  };

  useEffect(() => {
    if (checkboxValue) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [checkboxValue]);

  // TODO --- Solve the probleme with the checkbox and the responsive menu

  return (
    <StyledNavbar style={navbarStyle}>
      <section>
        <div>
          <Link onClick={scrollToTop} id="innerLink" to="/">
            <img
              id="logoNasser"
              src={ImgBackground}
              alt="Nas´Ser"
              style={LogoStyle}
            />
            <p>Nas´Ser</p>
          </Link>
        </div>
        <div id="responsiveMenu" className={resizeClass}>
          <ul>
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
            <ConsultasLink />
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
            id="checkButton"
            checked={checkboxValue}
            onChange={handleCheckboxChange}
          />
          <label id="burgerMenu" htmlFor="checkButton">
            <FaBars />
          </label>
          {/* <label  htmlFor="checkButton">
            <input id="checkButton" type="checkbox" />
            <FaBars />
          </label> */}
        </div>
      </section>
    </StyledNavbar>
  );
};

export default Navbar;
