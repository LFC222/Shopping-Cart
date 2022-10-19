import styled from 'styled-components'

export const CartContainer = styled.li`
    box-shadow:4px 4px 5px rgba(0,0,0,0.25);
    background:white;
    padding:2rem;
    display:grid;
    grid-template-columns:2fr 1fr 1fr;
    align-items:center;
    border-radius:0.75rem;
`;

export const RemoveButton = styled.button`
    border: 3px solid #7b56a0;
    background:transparent ;
    color:#7b56a0;
    font-weight:bold;

    &:hover
    {
        color: white;
        background: #7b56a0;
    }
`;