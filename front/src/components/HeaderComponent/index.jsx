import React from "react";
import { Header, Logo } from "./styled.jsx";
import logoImg from "../../assets/logo.png"

const HeaderComponent = () => {
    return (
        <Header>
            <img src={logoImg} alt=""/>
            <Logo>Soluções digitais</Logo>
        </Header>
    )
}

export { HeaderComponent }