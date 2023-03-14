import FooterComponent from "../FooteerComponent";
import { HeaderComponent } from "../HeaderComponent";
import GlobalStyle from "../../styles/global"
const LayoutBasePageComponent = ({children }) => {
    return (
      <>
        <HeaderComponent />
          <main>
              {children}
          </main>
        <FooterComponent/>
        <GlobalStyle/>
      </>
    );
  };

  export default LayoutBasePageComponent;