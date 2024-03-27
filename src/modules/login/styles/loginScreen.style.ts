import styled from 'styled-components'

export const BackgroundImage = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  z-index: -1;
`;

export const ContainerLogin= styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #d9d9d9;
padding: 22px;
width: 100%;
height: 100vh;
max-width: 646px;
`;