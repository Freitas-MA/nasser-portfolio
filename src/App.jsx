import { GlobalStyle } from "./GlobalStyle";
import { Navbar } from "./components";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/theme";
import { Home } from "./pages/index";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Navbar />
          <Home />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
