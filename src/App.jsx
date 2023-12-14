import { GlobalStyle } from "./GlobalStyle";
import { Navbar } from "./components";
import { ThemeProvider } from "styled-components";
import { Theme } from "./theme/Theme";
import Footer from "./components/Footer/Footer";
import Cookies from "./components/Cookies/Cookies";
// Router component
import { Outlet } from "react-router-dom";
// Vercel Analytics and Speed Insights
import { SpeedInsights } from "@vercel/speed-insights/react";
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
        <SpeedInsights />
        <Analytics />
      </ThemeProvider>
    </>
  );
}

export default App;
