import { GlobalStyle } from "./GlobalStyle";
import { Navbar } from "./components";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/Theme";
import Footer from "./components/Footer/Footer";
import Cookies from "./components/Cookies/Cookies";
// Router component
import { Outlet } from "react-router-dom";
// Vercel Analytics
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Navbar />
        <Outlet />
        <Cookies />
        <Footer />
        <Analytics />
      </ThemeProvider>
    </>
  );
}

export default App;
