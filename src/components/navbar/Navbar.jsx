import React, { Component, useEffect, useState } from "react";
import { StyledNavbar } from "./Navbar.style.jsx";
import ImgBackground from "../../assets/Logo/2-removebg-preview.png";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { Theme } from "../../theme/theme.jsx";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineArrowDown } from "react-icons/ai";

import {
  ConsultasMap,
  navbarMapLeft,
  navbarMapRight,
} from "../../Objects.API/Navbar.Maps.js";

/**
 * Renders the Navbar component with a logo, menu items, and a checkbox for mobile view.
 * @returns {JSX.Element} The Navbar component.
 */
const Navbar = () => {
  const consultas = ConsultasMap;
  const { scrollY } = useScroll();
  const [scrollPosition, setScrollPosition] = useState(scrollY.get());
  const [checkboxValue, setCheckboxValue] = useState(false);

  // Enter with the data from the API || Navbar.Maps.js
  const dataLeft = navbarMapLeft;
  const dataRight = navbarMapRight;

  /**
   * Updates the scroll position state when the user scrolls.
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(scrollY.get());
    };

    const unsubscribe = scrollY.onChange(handleScroll);

    return () => {
      unsubscribe();
    };
  }, [scrollY]);

  /**
   * Scrolls to the top of the page and unchecks the mobile menu checkbox.
   */
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    checkboxValue && setCheckboxValue(false);
  };

  /**
   * Updates the checkbox value state when the user clicks on the mobile menu checkbox.
   * @param {Object} event - The event object.
   */
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
          {dataLeft.map((data, index) => {
            const Component = data.component;
            const key = data.id || index;
            const logo = data.logo || "";
            const title = data.title || "";
            const link = data.link || "";
            const className = data.className || "";

            return (
              <Component key={key} id={key} to={link} onClick={scrollToTop}>
                <img className={className} src={logo} alt={title} />
                <p>{title}</p>
              </Component>
            );
          })}
        </div>
        <div id="menuList">
          <ul id="responsiveMenu">
            {dataRight.map((data, index) => {
              const Component = data.component;
              const key = data.id || index;
              const title = data.title || "";
              const link = data.link || "";
              const subMenu = data.subMenu;

              return subMenu.length > 0 ? (
                <Component key={key} className="subMenu">
                  <span>
                    <Link onClick={scrollToTop} to={link}>
                      {title} <AiOutlineArrowDown className="arrowSymbol" />
                    </Link>
                  </span>
                  <div className="innerMenu">
                    <ul className="floatMenu">
                      {subMenu.map((subMenu, index) => (
                        <li key={index}>
                          <Link
                            onClick={scrollToTop}
                            to={`/consultas/${index}`}
                          >
                            {subMenu.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Component>
              ) : (
                <Component key={key}>
                  <Link onClick={scrollToTop} to={link}>
                    {title}
                  </Link>
                </Component>
              );
            })}
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
