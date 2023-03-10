import React from "react";
import { Header, Logo } from "./styled";
import logoImg from "../../assets/logo.png"

const Layout = () => {
    return (
        <Header>
            <img src={logoImg} alt=""/>
            <Logo>Soluções digitais</Logo>
        </Header>
    )
}

export { Layout }