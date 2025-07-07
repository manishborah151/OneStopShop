import React, {createContext, useState} from "react";
import all_product from "../assets/all_product";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) => {
  const [cartItems, setcartItems] = useState([]);

  const addToCart = (itemId, size, quantity = 1) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.id === itemId && item.size === size
    );

    if (existingIndex !== -1) {
      const updatedCart = cartItems.map((item, idx) =>
        idx === existingIndex
          ? {...item, quantity: item.quantity + quantity}
          : item
      );
      setcartItems(updatedCart);
    } else {
      const product = all_product.find((product) => product.id === itemId);
      if (!product) return;

      const cartProduct = {
        ...product,
        size,
        quantity,
      };

      setcartItems([...cartItems, cartProduct]);
    }
  };

  const removeFromCart = (itemId, size, removeAll = false) => {
    const existingIndex = cartItems.findIndex(
      (item) => item.id === itemId && item.size === size
    );

    if (existingIndex === -1) return;

    const item = cartItems[existingIndex];

    if (removeAll || item.quantity <= 1) {
      setcartItems(cartItems.filter((_, idx) => idx !== existingIndex));
    } else {
      const updatedCart = cartItems.map((item, idx) =>
        idx === existingIndex ? {...item, quantity: item.quantity - 1} : item
      );
      setcartItems(updatedCart);
    }
  };

  const getTotalCartAmount = () => {
    return cartItems.reduce(
      (total, product) => total + product.new_price * product.quantity,
      0
    );
  };

  const getTotalCartItems = () => cartItems.length;

  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
