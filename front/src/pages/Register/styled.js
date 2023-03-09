import styled from "styled-components";
import  background  from "../../assets/bg.png"


export const Container = styled.div`
    width: 100%;
    height: 98vh;

    display: flex;
    justify-content: center;
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
`

export const AstroContainer = styled.div`
    display:flex;
    flex-direction: column;
    img{
        width: 700px;
    }
    width: 60%;
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
export const JaPossui = styled.p`
    font-size: 12px;
    font-weight: 400;
    font-family:sans-serif;
    margin: auto;
    margin-bottom: 5px;
`