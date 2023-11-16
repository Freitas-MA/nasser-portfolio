import { styled } from "styled-components";

export const ContactSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 95vh;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 80%;
  max-width: 1200px;
  min-width: 300px;
  height: auto;
  margin-top: 3rem;
  margin-bottom: 1rem;
  padding: 1rem;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 35%;
  min-width: 280px;
  height: 100%;
  min-height: 100%;
  border-radius: 20px 0px 0px 20px;

  & > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    width: 100%;
    height: 100%;
    min-height: 100%;
  }

  & > #socialIcons {
    display: flex;
    flex-direction: row;
  }
`;

export const RightSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60%;
height: auto;
  min-height: 50vh;
  padding: 1rem;
  margin: 1rem;
  min-width: 280px;
  backdrop-filter: blur(10px);
  border-radius: 20px;
  position: relative;

`;
