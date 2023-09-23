import { styled } from "styled-components";

export const ConsultasStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 4rem 10rem;

  & > div {
    margin: 10px;
    width: 350px;
    height: 350px;
    border: 1px solid black;
  }

  @media (max-width: 1200px) {
    & > div {
        width: 350px;
    }
  }

  @media (max-width: 768px) {
    & > div {
        width: 350px;
    }
  }
`;