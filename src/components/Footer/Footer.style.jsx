import { styled } from "styled-components";
import { Theme } from "../../theme/theme";

const { colors, fonts } = Theme;

export const FooterContainer = styled.div`
    position: static;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: ${colors.backgroundPrimary};
    color: ${colors.textSecondary};
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem;
    padding-top: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;

    & > div {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
        margin: 0.5rem;
        width: 100%;
    }
`;
