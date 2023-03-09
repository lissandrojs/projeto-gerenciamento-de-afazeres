import { Layout } from "../../components/layout";
import GlobalStyle from "../../styles/global" ;
import { Input } from "../../components/input";
import { Button } from "../../components/button";
import { AstroContainer, Container, FormContainer, JaPossui, Titulo } from "./styled";
import {MdEmail, MdLock, MdAccountBox, MdAccountCircle} from 'react-icons/md'
import bannerImage from "../../assets/banner.png";


import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Login from "../Login/login";


const schema = yup.object({
  nome: yup.string().required('Campo obrigatorio'),
  email: yup.string().email('email não é valido').required('Campo obrigatorio'),
  password: yup.string().min(8, 'No minimo 8 caracteres').required('Campo obrigatorio'),
  userName: yup.string().required('Campo obrigatorio'),
}).required();

function Register() {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  console.log(isValid, errors)

  const onSubmit = data => console.log(data);


  return (<>
    <Layout />
    <Container>
      <AstroContainer>
       
        <img src={bannerImage} alt='baner'></img>
      </AstroContainer>
      <FormContainer>
        <Titulo>Cadastrar</Titulo>
        <form onSubmit={handleSubmit(onSubmit)}>
        <Input control={control} name="nome"  placeholder="Nome Completo" type="text" leftIcon={<MdAccountBox />}/>
        <Input control={control} name="email"  placeholder="E-mail" type="email" leftIcon={<MdEmail />}/>
        <Input control={control} name="password" placeholder="Senha" type="password" leftIcon={<MdLock />}/>
        <Input control={control} name="confirmPassword" placeholder="Confirmar Senha" type="password" leftIcon={<MdLock />}/>
        <Input control={control} name="dataNascimento" type="date"/>
        <Input control={control} name="userName"  placeholder="Nome de Usuario" type="text" leftIcon={<MdAccountCircle />}/>
        <Button title="Cadastrar" type='submit'/>
        </form>
        <JaPossui> Ja possui uma conta? clique <a href={<Login />}> aqui!</a></JaPossui>
      </FormContainer>
    </Container>
    <GlobalStyle />
    </>);
}

export default Register;
