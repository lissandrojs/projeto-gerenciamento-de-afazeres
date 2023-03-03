import styled from "styled-components"

export const InputContainer = styled.div`
    width: 100%;
    max-width: 250px;
    height: 30px;
    border-bottom: 2px solid black;
    margin: auto;
    margin-top: 10px;
    padding: 5px;

    display: flex;
    align-itens: center;
    margin-bottom: 10px;
`
export const ErrorText = styled.p`
    color: #ff0000
    font-size: 10px;
    margin: auto
`

export const InputText = styled.input`
    background-color: light-gray;
    border: 0;
    height: 30px;
    width: 100%;
    outline: 0;
`