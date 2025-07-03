import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Shop from "./Pages/Shop";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import LoginSignup from "./pages/LoginSignup";

import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import uselocalstorage from "use-local-storage";
function App() {
  const [theme] = uselocalstorage("theme", "light");
  return (
    <>
      <div data-theme={theme}>
        <Navbar />
        <Routes>
          <Route path="/OneStopShop" element={<Shop />} />
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
      </div>
    </>
  );
}

export default App;
