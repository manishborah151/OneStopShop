import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import ShopContextProvider from "./Context/ShopContext";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ShopContextProvider>
        <App />
      </ShopContextProvider>
    </BrowserRouter>
  </StrictMode>
);
reportWebVitals();
