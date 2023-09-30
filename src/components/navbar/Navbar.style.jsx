import { styled } from "styled-components";
import { Theme } from "../../theme/theme";

const { colors, layout } = Theme;
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

  & > section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    /* padding: 0 3rem; */

    & > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      height: 100%;
      /* padding: 0 3rem; */
      /* height: 50px; */

      & > #innerLink {
        display: flex;
        align-items: center;
        gap: 1rem;
      }
      & #burgerMenu {
        display: none;
      }
      & > input {
        display: none;
      }

      & > #responsiveMenu {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 0 3rem;

        & #subMenu {
          height: 50px;
          display: flex;
          flex-direction: column;
          text-align: center;
          & > #innerMenu {
            position: relative;
            display: none;
          }
          &:hover {
            & > #innerMenu {
              display: flex;
              flex-direction: column;
            }
          }

          & > span {
            margin-top: 0.9rem;
            & #arrowSymbol {
              transform: translateY(2px);
            }
          }
          & > #innerMenu > #floatMenu {
            position: absolute;
            top: 100%;
            width: max-content;
            padding: 0.5rem 0.5rem;
            border-radius: 5px;
            background-color: ${colors.backgroundPrimary};
            box-shadow: 2px 5px 10px 0px ${colors.shadowsColor};

            & > li {
              margin: 2px 0;
              padding: 0.5rem 0.2rem;
              list-style: none;
              background-color: ${colors.shadowsColor};
              color: ${colors.textTertiary};
              border-radius: 5px;
              cursor: pointer;
              transition: background-color 0.2s ease-in-out;
              &:hover {
                background-color: ${colors.backgroundPrimary};
                color: ${colors.textPrimary};
              }
            }
            &:hover {
              & > #innerMenu > #floatMenu {
                display: flex;
                flex-direction: column;
              }
            }
          }
        }
      }
      /* Check box functions 
    !Inside of the checkbox function I'm passing the value of the checkbox to the styled component as checkboxValue, tha value will be received as props and will be used to change the display of the menu when the menu is in responsive mode.
    #
    */

      /* 
    !This is the logo style, the background color is going to change when the scroll position is different than 0, and the transition is going to be smooth.
    */
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

    /* 
  !Now i'm going to use the @media query to change the format of the navbar when the display is less than 768px (mobile)...
  !The menu is going to be displayed as a full screen when the checkbox is checked, and is going to be undisplayed when the checkbox is unchecked.
  */
    @media (max-width: 768px) {
      #menuList {
        display: flex;
        flex-direction: row-reverse;
        position: relative;

        & > #burgerMenu {
          display: flex;
          margin-right: 1rem;
        }
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
          padding-bottom: 10rem;
          background-color: ${colors.shadowsColor};
          color: ${colors.textTertiary};
          transition: all 0.2s ease-in-out;
          transform: translateY(-17px) ${(props) =>
            props.checkboxvalue === "true"
              ? "translateX(0)"
              : "translateX(110vw)"}; // !Here is where the magic happens, the menu is going to be displayed when the checkbox is checked, and is going to be undisplayed when the checkbox is unchecked.
          overflow: hidden;
          & #subMenu {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;
            text-align: center;
            padding-bottom: 1rem;

            & > span {
              margin-bottom: 0.9rem;
            }

            & > #innerMenu {
              display: flex;
              flex-direction: column;
              position: unset;
              width: 100vw;
              height: auto;
              align-items: center;
              justify-content: center;

              & #floatMenu {
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
