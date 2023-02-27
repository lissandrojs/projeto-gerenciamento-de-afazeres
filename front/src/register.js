import { Layout } from "./components/layout";
import GlobalStyle from "./styles/global" ;
import { Input } from "./components/input";
import { Button } from "./components/button";

function Register() {
  return (<>
    <Layout />
    <Input />
    <Input />
    <Input />
    <Button />
    <GlobalStyle />
    </>);
}

export default Register;
