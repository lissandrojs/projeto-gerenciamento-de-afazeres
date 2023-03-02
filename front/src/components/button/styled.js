import styled from "styled-components";

export const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Botao = styled.button`
    width: 300px;
    height: 50px;
    border-radius: 10px;
    color: white;
    background: linear-gradient(to right, #8432FC 0%, #5039E6 34.48%, #274CFC 100%);
    margin: 20px;
    border: 0;

    &&:hover{
        opacity:0.33;
    }
`