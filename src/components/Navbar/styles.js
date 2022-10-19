import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position:fixed;
  top:0;
  display: flex;
  width: 100vw;
  height: 15vh;
  background-color: #f8f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow:5px 5px 20px rgba(0,0,0,0.25);
`;

export const NavContainer = styled.nav`
  max-width: 900px;
  width: 90%;
  display: flex;
  align-items:center;
  justify-content:space-between;

`;

export const TextIndex = styled.h2`
  font-size: 2rem;
  font-weight: normal;
`;

export const Bold = styled.span`
  font-weight:bold;
`;

export const ActionContainer = styled.div`
  display:flex ;
  align-items:center;
  justify-content:space-between;
  min-width: 50%
`;

export const ContainerDescription = styled.div`
  display:flex ;
  flex-direction: column;
  align-items:flex-start;
  justify-content:center;
`;

export const CleanButton = styled.button`
  max-width: 8rem;
`;

export const TotalItem = styled.span`
  font-size:1rem ;
`;

export const PriceItem = styled.span`
  font-size:1.25rem;
  font-weight:bold;
`;