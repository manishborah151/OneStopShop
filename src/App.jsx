import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";
import Collections from "./Pages/Collections";
import Offers from "./Pages/Offers";
import Footer from "./Components/Footer/Footer";

import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ShopCategory from "./Pages/ShopCategory";
import vape_banner from "./assets/prodBanners/p1L4.png";
import hookha_banner from "./assets/prodBanners/p4L4.png";
import smoking_banner from "./assets/prodBanners/p3L4.png";

import uselocalstorage from "use-local-storage";
function App() {
  const [theme] = uselocalstorage("theme", "light");
  return (
    <>
      <div className="app" data-theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/OneStopShop" element={<Shop />} />
          <Route
            path="/OneStopShop/vape"
            element={<ShopCategory banner={vape_banner} category="vape" />}
          />
          <Route
            path="/OneStopShop/hookha"
            element={<ShopCategory banner={hookha_banner} category="hookha" />}
          />
          <Route
            path="/OneStopShop/smoking"
            element={
              <ShopCategory banner={smoking_banner} category="smoking" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/collections" element={<Collections />} />
        </Routes>
        <Footer />{" "}
      </div>
    </>
  );
}

export default App;
