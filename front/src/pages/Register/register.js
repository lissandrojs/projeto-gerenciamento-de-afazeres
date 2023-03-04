import { Layout } from "../../components/layout";
import GlobalStyle from "../../styles/global" ;
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Container, FormContainer, Titulo } from "./style";

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  nome: yup.string().required('Campo obrigatorio'),
  email: yup.string().email('email não é valido').required('Campo obrigatorio'),
  password: yup.string().min(8, 'No minimo 8 caracteres').required('Campo obrigatorio'),
  userName: yup.string().required('Campo obrigatorio'),
}).required();

function Register() {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode:'onSubmit'
  });

  console.log(isValid, errors)

  const onSubmit = data => console.log(data);


  return (<>
    <Layout />
    <Container>
      <FormContainer>
        <Titulo>Cadastrar</Titulo>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="nome" placeholder="Nome Completo" type="text"/>
        <Input control={control} name="email" placeholder="E-mail" type="email"/>
        <Input control={control} name="password" placeholder="Senha" type="password"/>
        <Input control={control} name="dataNascimento" type="date"/>
        <Input control={control} name="userName" placeholder="Nome de Usuario" type="text"/>
        <Button title="Cadastrar" type='submit'/>
        </form>
      </FormContainer>
    </Container>
    <GlobalStyle />
    </>);
}

export default Register;
