import { Layout } from "../../components/layout";
import GlobalStyle from "../../styles/global" ;
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Container, FormContainer, Titulo } from "./style";

function Register() {
  return (<>
    <Layout />
    <Container>
      <FormContainer>
        <Titulo>Cadastrar</Titulo>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
        <Button />
      </FormContainer>
    </Container>
    <GlobalStyle />
    </>);
}

export default Register;
