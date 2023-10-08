/**
 * Styled component representing a navigation bar with responsive behavior.
 *
 * Inputs:
 * - styled: Function from the styled-components library
 * - Theme: Object from the "../../theme/theme" file
 *
 * Outputs:
 * - StyledNavbar: A styled component representing a navigation bar
 *
 * Example Usage:
 * import { styled } from "styled-components";
 * import { Theme } from "../../theme/theme";
 *
 * const { colors, layout } = Theme;
 * export const StyledNavbar = styled.nav`
 *   // styles here
 * `;
 *
 * Code Analysis:
 * - Imports the necessary dependencies and the Theme object
 * - Destructures the colors and layout properties from the Theme object
 * - Defines the StyledNavbar component using the styled function from styled-components
 * - Sets the styles for the navbar, including its position, width, height, background color, and transition
 * - Defines nested styles for the sections and divs within the navbar
 * - Uses media queries to adjust the navbar's appearance for mobile devices
 * - Uses the checkbox value to control the display of the responsive menu
 * - Applies additional styles for the logo and menu items
 */
import { styled } from "styled-components";
import { Theme } from "../../theme/theme";

const { colors, layout } = Theme;
/**
 * Styled component for the navbar
 * @param {number} scrollposition - The current scroll position of the page
 * @param {boolean} checkboxvalue - The value of the checkbox used for responsive menu
 * @returns {JSX.Element} - The styled navbar component
 */
export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 1000;
  height: ${layout.navbarHeight};
  background-color: ${(props) =>
    props.scrollposition !== 0 ? `${colors.shadowsColor}` : "transparent"};
  color: ${(props) =>
    props.scrollposition !== 0
      ? `${colors.textTertiary}`
      : `${colors.textPrimary}`};
  transition: background-color 0.2s ease-in-out;

  // Section containing the logo and menu
  & > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: ${layout.maxWidth};
    margin: 0 auto;
    height: 100%;

    // Div containing the logo and menu items
    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;

      // Div containing the logo and inner link
      & > #innerLink {
        display: flex;
        align-items: center;
        gap: 1rem;
      }

      // Burger menu icon
      & #burgerMenu {
        display: none;
      }

      // Hidden input used for responsive menu checkbox
      & > input {
        display: none;
      }

      // Responsive menu
      & > #responsiveMenu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 3rem;

        // Submenu items
        & .subMenu {
          height: 50px;
          display: flex;
          flex-direction: column;
          text-align: center;

          // Inner submenu items
          & > .innerMenu {
            position: relative;
            display: none;
          }

          // Show inner submenu items on hover
          &:hover {
            & > .innerMenu {
              display: flex;
              flex-direction: column;
            }
          }

          // Submenu item text and arrow
          & > span {
            margin-top: 0.9rem;
            & .arrowSymbol {
              transform: translateY(2px);
            }
          }

          // Floating submenu items
          & > .innerMenu > .floatMenu {
            position: absolute;
            top: 17px;
            width: max-content;
            padding: 0.5rem 0.5rem;
            border-radius: 5px;
            background-color: ${colors.backgroundPrimary};
            box-shadow: 2px 5px 10px 0px ${colors.shadowsColor};

            // Submenu item
            & > li {
              margin: 2px 0;
              padding: 0.5rem 0.2rem;
              list-style: none;
              background-color: ${colors.shadowsColor};
              color: ${colors.textTertiary};
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.2s ease-in-out;

              // Highlight submenu item on hover
              &:hover {
                background-color: ${colors.backgroundPrimary};
                color: ${colors.textPrimary};
              }
            }

            // Show floating submenu items on hover
            &:hover {
              & > .innerMenu > .floatMenu {
                display: flex;
                flex-direction: column;
              }
            }
          }
        }
      }

      // Logo style
      .logo {
        background-color: ${(props) =>
          props.scrollposition !== 0
            ? `${colors.backgroundPrimary}`
            : "transparent"};
        transition: background-color 0.2s ease-in-out;
        cursor: pointer;
        width: 50px;
        border-radius: 50%;
      }
    }

    // Media query for responsive menu
    @media (max-width: 768px) {
      #menuList {
        display: flex;
        flex-direction: row-reverse;
        position: relative;
        max-height: 100%;

        // Burger menu icon
        & > #burgerMenu {
          display: flex;
          margin-right: 1rem;
        }

        // Responsive menu
        #responsiveMenu {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;
          position: absolute;
          top: 50px;
          right: 0;
          width: 100vw;
          min-width: 100vw;
          height: 100vh;
          max-height: 100vh;
          padding-bottom: 10rem;
          background-color: ${colors.shadowsColor};
          color: ${colors.textTertiary};
          transition: all 0.2s ease-in-out;
          transform: translateY(-17px)
            ${(props) =>
              props.checkboxvalue === "true"
                ? "translateX(0)"
                : "translateX(110vw)"};
          overflow: hidden;

          // Submenu items
          & .subMenu {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            text-align: center;
            padding-bottom: 1rem;

            // Submenu item text
            & > span {
              margin-bottom: 0.9rem;
            }

            // Inner submenu items
            & > .innerMenu {
              display: flex;
              flex-direction: column;
              position: unset;
              width: 100vw;
              height: auto;
              align-items: center;
              justify-content: center;
              margin: auto 0;

              & .floatMenu {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                position: unset;
                width: 80%;
                height: 100%;
                padding: 0;
                background-color: transparent;
                box-shadow: none;
                text-align: center;
                gap: 1rem;

                & > li {
                  width: 100%;
                  margin: 0;
                  border-radius: 10px;
                  background-color: ${colors.shadowsColor};
                  cursor: pointer;
                  transition: background-color 0.2s ease-in-out;
                  font-size: ${Theme.fontSize.xSmall};
                  &:hover {
                    background-color: transparent;
                  }
                }
              }
            }
          }
          & > li {
            list-style: none;
            width: 100%;
            height: 100%;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0.5rem 0;
            padding: 0.5rem 0.2rem;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.2s ease-in-out;
            border-top: 1px solid ${colors.backgroundPrimary};
            &:hover {
              background-color: ${colors.backgroundPrimary};
              color: ${colors.textPrimary};
            }
          }
        }
      }
    }
  }
`;
