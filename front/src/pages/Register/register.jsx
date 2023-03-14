
import GlobalStyle from "../../styles/global" ;
import { CustomInputComponent } from "../../components/CustomInputComponent";
import { ButtonComponent } from "../../components/ButtonComponent";
import { AstroContainer, Container, FormContainer, JaPossui, Titulo } from "./styled.jsx";
import {MdEmail, MdLock, MdAccountBox, MdAccountCircle} from 'react-icons/md'
import bannerImage from "../../assets/banner.png";


import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import Login from "../Login/login";
import LayoutBasePageComponent from "../../components/Layout";


const schema = yup.object({
  nome: yup.string().required('Campo obrigatorio'),
  email: yup.string().email('email não é valido').required('Campo obrigatorio'),
  password: yup.string().min(8, 'No minimo 8 caracteres').required('Campo obrigatorio'),
  confirmedPassword: yup.string().required("Senhas diferentes").oneOf([yup.ref("password")], "Senhas desiguais"),
  userName: yup.string().required('Campo obrigatorio'),
}).required();

function Register() {

  const { control, handleSubmit, formState: { errors, isValid } } = useForm({
    resolver: yupResolver(schema),
    mode:'onChange'
  });

  console.log(isValid, errors)

  const onSubmit = data => console.log(data);



  return (
    <LayoutBasePageComponent>
    <Container>
      <AstroContainer>
        <h1>Nao fique no mundo da lua</h1>
        <h2>Utilize nosso Gerenciador para organizar suas tarefas</h2>
        <img src={bannerImage} alt='baner'></img>
      </AstroContainer>
      <FormContainer>
        <Titulo>Cadastrar</Titulo>
        <form onSubmit={handleSubmit(onSubmit)}>
        <CustomInputComponent control={control} name="nome" errorMessage={errors.nome?.message} placeholder="Nome Completo" type="text" leftIcon={<MdAccountBox />}/>
        <CustomInputComponent control={control} name="email" errorMessage={errors.email?.message} placeholder="E-mail" type="email" leftIcon={<MdEmail />}/>
        <CustomInputComponent control={control} name="password" errorMessage={errors.password?.message} placeholder="Senha" type="password" leftIcon={<MdLock />}/>
        <CustomInputComponent control={control} name="confirmedPassword" errorMessage={errors.confirmedPassword?.message} placeholder="Confirmar Senha" type="password" leftIcon={<MdLock />}/>
        <CustomInputComponent control={control} name="dataNascimento" type="date"/>
        <CustomInputComponent control={control} name="userName" errorMessage={errors.userName?.message} placeholder="Nome de Usuario" type="text" leftIcon={<MdAccountCircle />}/>
        <ButtonComponent title="Cadastrar" type='submit'/>
        </form>
        <JaPossui> Ja possui uma conta? clique <a href={<Login />}> aqui!</a></JaPossui>
      </FormContainer>
    </Container>
    <GlobalStyle />
    </LayoutBasePageComponent>
    );
}

export default Register;