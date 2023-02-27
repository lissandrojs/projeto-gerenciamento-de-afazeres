import { Layout } from "./components/layout";
import GlobalStyle from "./styles/global" ;
import { Input } from "./components/input";

function App() {
  return (<>
    <Layout>
      <Input />
    </Layout>
    <GlobalStyle />
    </>);
}

export default App;
