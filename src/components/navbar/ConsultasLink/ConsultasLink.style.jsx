import { styled } from "styled-components";
import { Theme } from "../../../theme/theme";

const { colors } = Theme;

export const ConsultasLinkStyle = styled.li`
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
        top: 47px;
        left: 0px;
        width: auto;
        height: auto;
        overflow: hidden;
        transition: height 0.5s ease-in-out;
        z-index: 1;
        border-radius: 5px;
        
        &:hover {
            display: flex;
        }
        
        & > ul {
            display: flex;
            flex-direction: column;
            justify-content: space-around;
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
                padding: 0 1rem;
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
   

    // @media (max-width: 768px) {
    //     & #subMenu {
    //         & > ul {
    //             display: flex;
    //             flex-direction: column;
    //             justify-content: space-around;
    //             align-items: center;
    //             width: 100%;
    //             height: 100%;
    //             list-style: none;
    //             padding: 0;
    //             margin: 0;
    //         }
    //     }
   
`;
