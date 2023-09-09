import { styled } from "styled-components";
import { Theme } from "../../theme/theme";
import ImgBackground from "../../assets/background.png";

const { colors, fontSize, layout } = Theme;

export const BeatrizFreitasStyled = styled.section`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
    height: 100%;
  
    & > section {
        display: block;
        width: 100%;
        margin-top: 10rem;

        
        & > div {
            display: grid;
            grid-template-columns: ${layout.gridTemplateColumns};
            gap: 2rem;
            align-items: center;
            justify-items: center;
            min-height: 100vh;
            background-color: ${colors.backgroundPrimary};
            width: 100%;
            padding: ${layout.padding};

            & > div {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                align-items: center;
                justify-content: center;
                min-height: 100vh;
                background-color: ${colors.backgroundPrimary};
                width: 100%;

                & > img {
                    width: 80%;
                    height: auto;
                    border-radius: 10px;
                }

                
            }
        }

        & #beatrizProfile {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            align-items: start;
            justify-content: center;
            min-height: 100vh;

            & > h2 {
                font-size: ${fontSize.xLarge};
                color: ${colors.textPrimary};
                text-align: center;
                margin-bottom: 2rem;
            }

            & > p {
                font-size: ${fontSize.medium};
                color: ${colors.textPrimary};
                text-align: start;
                padding: 0 2rem;
            }
        }

        & #messageProfile {
            display: flex;
            flex-direction: column;
            width: 100%;
            height: max-content;
            min-height: 10vh;
            max-height: 30vh;

            & > div {
                display: flex;
                flex-direction: column;
                gap: 2rem;
                align-items: center;
                justify-content: center;
                background-color: ${colors.backgroundPrimary};
                width: 100%;
                height: max-content;
                min-height: 10vh;
                max-height: 20vh;
                padding: ${layout.padding};
                border-top: 1px solid ${colors.textPrimary};
                border-bottom: 1px solid ${colors.textPrimary};

                & > p {
                    font-size: ${fontSize.medium};
                    color: ${colors.textPrimary};
                    text-align: start;
                    padding: 0 2rem;
                }
            }

        }
        
        & > h1 {
            display: flex;
            flex-direction: column;
            justify-content: center;
            font-size: ${fontSize.xxLarge};
            color: ${colors.textPrimary};
            text-align: center;
            margin-bottom: 2rem;
            padding-top: 5rem;
            height: 40vh;
            }
    }
    

    & #background {
        content: "";
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 110vh;
        background-image: url(${ImgBackground});
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        transform: translateY(-10vh);
        opacity: 0.8;
        z-index: -1;
    }
    }
`;
