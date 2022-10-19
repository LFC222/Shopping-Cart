import styled from 'styled-components'

export const MainContainer = styled.main`
    margin-top:15vh;
    width:100%;
    min-height:60vh;
    display:flex;
    align-items:center;
    justify-content:center;
`;

export const CourseContainer = styled.section`
    max-width:900px;
    width:90%;
    display:grid;
    grid-template-columns:1fr 1fr 1fr;
    gap:2rem ;

    @media (max-width : 800px){
        grid-template-columns:1fr 1fr ;
    }

    @media (max-width : 520px){
        grid-template-columns:1fr;
    }
`;