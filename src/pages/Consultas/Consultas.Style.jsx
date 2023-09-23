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
    padding: 10px;
    border: 1px solid black;
    overflow: hidden;

    & > h3 {
      text-align: center;
    }

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
  }
  }
`;
