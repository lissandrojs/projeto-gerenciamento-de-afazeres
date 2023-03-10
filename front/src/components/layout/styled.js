import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 50px;
    background-color: #000;
    display: flex;
    align-items: center;
   
    img {
        margin-left: 5px;
        width: 40px;
    }
`
export const Logo = styled.div`
    font-size: 18px;
    font-weight: 700;
    color: #fff;
    margin-left: 5px;
    font-family: 'Josefin Sans', sans-serif;
    &:hover{
        opacity:0.5;
        cursor: pointer;
    }
   
`
