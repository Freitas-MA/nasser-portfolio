import { GlobalStyle } from "./GlobalStyle";
import { Navbar } from "./components";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/theme";
import { Home } from "./pages/index";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Navbar />
        <Home />
      </ThemeProvider>
    </>
  );
}

export default App;
