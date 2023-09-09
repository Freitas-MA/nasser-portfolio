import { styled } from "styled-components";
import { Theme } from "../../../theme/theme";

const { colors } = Theme;

export const ConsultasLinkStyle = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    gap: 10px;

    &:hover {
        cursor: pointer;

        & #subMenu {
            display: flex;
        }
    }

    & #subMenu {
        display: none;
        position: absolute;
        top: 60px;
        left: 15px;
        width: 10vw;
        height: 20vh;
        overflow: hidden;
        transition: height 0.5s ease-in-out;
        z-index: 1;
        border-radius: 5px;
        
        &:hover {
            display: flex;
        }
        
        & ul {
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;
            width: 100%;
            height: 100%;
            list-style: none;
            padding: 0;
            margin: 0;
            border-radius: 5px;
            gap: 4px;
            
            
            & li {
                width: 100%;
                height: 100%;
                transition: background-color 0.5s ease-in-out;
                border-radius: 5px;
                background-color: ${colors.backgroundPrimary};
                text-align: center;
                line-height: 3.5;
                box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
                color: ${colors.textQuaternary};
                &:hover {
                    background-color: ${colors.shadowsColor};
                    color: ${colors.textTertiary};
                }

        }
    }

`;
