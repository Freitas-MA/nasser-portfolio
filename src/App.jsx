import { GlobalStyle } from "./GlobalStyle";
import { Navbar } from "./components";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/Theme";
import Footer from "./components/Footer/Footer";
// Router component
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Navbar />
        <Outlet />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default App;
