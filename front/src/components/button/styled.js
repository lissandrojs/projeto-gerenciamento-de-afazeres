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
    background-color: black;

    &&:hover{
        opacity:0.33;
    }
`