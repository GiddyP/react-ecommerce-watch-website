// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }

// export default App



import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Checkout from "./scenes/checkout/Checkout";
import Home from "./scenes/home/Home";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import Confirmation from "./scenes/checkout/Confirmation";
import Navbar from "./scenes/global/Navbar";
import CartMenu from "./scenes/global/CartMenu";
import Footer from "./scenes/global/Footer";
import { ColorModeContext, useMode } from "./theme2";
import { CssBaseline, ThemeProvider } from "@mui/material";


// this helps to take the screen view to top when redirection occurs
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        {/* This will reset the css to default */}
        <CssBaseline />
        <div className="app">
          <BrowserRouter>
            <Navbar />
            <ScrollToTop />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="item/:itemId" element={<ItemDetails />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="checkout/success" element={<Confirmation />} />
            </Routes>
            <CartMenu />
            <Footer />
          </BrowserRouter>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
