import { styled } from 'styled-components'

export const  ContactSection = styled.section`
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
height: auto;
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
justify-content: center;
align-items: center;
gap: 2rem;
padding: 2rem;
width: 35%;
min-width: 150px;
height: 100%;
min-height: 100%;
backdrop-filter: blur(10px);
border-radius: 20px 0px 0px 20px;
`;

export const RightSide = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 65%;
min-width: 300px;
padding: 2rem 2rem;
backdrop-filter: blur(10px);
border-radius: 0px 20px 20px 0px;
`;