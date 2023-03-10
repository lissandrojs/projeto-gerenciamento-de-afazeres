import styled from "styled-components";
import  background  from "../../assets/bg.png"

export const Container = styled.div`
    width: 100%;
    height: 98vh;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;

`

export const Titulo = styled.h1`
    font-size: 24px;
    font-weight: 600;
    color: #000;
    margin: auto;
    font-family: sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const FormContainer = styled.div`
    width: 300px;
    margin: 30px;
    margin-top: 10px;
    background-color: #fff;
    border-radius: 5px;

    display: flex;
    flex-direction: column;
`