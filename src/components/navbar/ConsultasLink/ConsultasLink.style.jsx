import { styled, keyframes } from "styled-components";
import { Theme } from "../../../theme/theme";

const { colors } = Theme;

const bounce = keyframes`
  0%, 100% {
    transform: translateY(5);
  }
  50% {
    transform: translateY(-2px);
  }
`;

export const ConsultasLinkStyle = styled.li`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 60px;
    gap: 10px;

    & #arrowSymbol {
        transform: translateY(2px);
    }

    &:hover {
        cursor: pointer;
        
        & #arrowSymbol {
            animation: ${bounce} 1s ease-in-out infinite alternate;
        }
        & #subMenu {
            display: flex;
        }
    }

    & #subMenu {
        display: none;
        position: absolute;
        top: 35px;
        left: 0px;
        width: auto;
        height: auto;
        padding-top: 10px;
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
