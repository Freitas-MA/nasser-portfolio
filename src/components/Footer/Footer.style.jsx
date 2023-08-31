import { styled } from "styled-components";
import { Theme } from "../../theme/theme";

const { colors, fonts } = Theme;

export const FooterContainer = styled.div`
    position: static;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: ${colors.shadowsColor};
    color: ${colors.textSecondary};
    text-align: center;
    font-size: 1rem;
    padding: 0.5rem;
    border: 1px solid red;
    display: flex;
    justify-content: center;
    align-items: center;

    & > div {
        border: 1px solid blue;
        margin: 0.5rem;
        width: 100%;
    }
`;
