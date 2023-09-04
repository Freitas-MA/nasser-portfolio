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
    height: max-content;
    margin-bottom: 2rem;
  
    & > section {
        display: block;
        width: 100%;
        height: max-content;

        
        & > div {
            display: grid;
            grid-template-columns: ${layout.gridTemplateColumns};
            gap: 2rem;
            align-items: center;
            justify-items: center;
            min-height: 100vh;
            background-color: ${colors.backgroundPrimary};
            border: 1px solid blue;
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
                border: 1px solid blue;
                width: 100%;
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
