import { Layout } from "../../components/layout";
import GlobalStyle from "../../styles/global" ;
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { Container, FormContainer, Titulo } from "./styled";
import { MdEmail, MdLock } from 'react-icons/md'

import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
  email: yup.string().email('email não é valido').required('Campo obrigatorio'),
  password: yup.string().min(8, 'No minimo 8 caracteres').required('Campo obrigatorio'),
}).required();

function Login() {

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
        <Titulo>Bem vindo ! </Titulo>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="email" placeholder="E-mail" type="email" leftIcon={<MdEmail />}/>
        <Input control={control} name="password" placeholder="Senha" type="password" leftIcon={<MdLock />}/>
        <Button title="Cadastrar" type='submit'/>
        </form>
      </FormContainer>
    </Container>
    <GlobalStyle />
    </>);
}

export default Login;
