import { styled } from "styled-components";
import { Theme } from "../../theme/theme";

const { colors, layout } = Theme;
export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 0 2rem;
  height: 5vh;
  width: 100%;
  position: fixed;
  top: 0;
  color: ${colors.textPrimary};
  z-index: 999;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.5));
  & > section {
    display: flex;
    max-width: ${layout.maxWidth};
    width: 100%;
    height: 100%;

    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: start;

      & > a {
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        & > img {
          width: 50px;
          max-width: 95%;
          max-height: 95%;
          margin: 10px;
          border-radius: 50%;
        }
      }
    }
  }
  & #floatMenu {
    display: none;
  }
  @media (max-width: 768px) {
    & ul {
      display: none;
    }
    & #checkbox {
      display: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      right: 1rem;
      cursor: pointer;
    }
    & #floatMenu:checked {
      & ul {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        right: 0;
      }
      
      }
    }
  }
`;

export const StyledNavbarList = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    & > li {
        height: 100%;
        width: 100%;
        display: flex;
        margin: 0 0.5rem;
        padding: 5px;
        justify-content: center;
        align-items: center;
        text-align: center;
        white-space: nowrap;
        &:hover {
            background-color: #ccc;
            cursor: pointer;
            border-radius: 0.5rem;
            transform: scale(1.1);
            transition: all 0.2s ease-in-out;
        }

       



`;
