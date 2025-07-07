import React, {useContext} from "react";
import "./CartItems.css";
import {ShopContext} from "../../Context/ShopContext";
import {Trash2, Bubbles} from "lucide-react";
import {toast} from "react-toastify";

const CartItems = () => {
  const {cartItems, addToCart, removeFromCart, getTotalCartAmount} =
    useContext(ShopContext);

  const isEmptyCart = cartItems.length === 0;

  const calculateTotalPrice = (item) => item.new_price * item.quantity;

  const handleIncrease = (id, size) => {
    addToCart(id, size, 1);
    toast.success("Quantity increased");
  };

  const handleDecrease = (id, size, quantity) => {
    if (quantity <= 1) {
      toast.info("Item removed from cart");
    } else {
      toast.info("Quantity decreased");
    }
    removeFromCart(id, size);
  };

  const handleRemove = (id, size) => {
    removeFromCart(id, size, true);
    toast.info("Item removed from cart");
  };

  return (
    <div className="cartitems">
      <div className="cartitemsLeft">
        <h3 className="cart-Tille">Shopping Cart </h3>

        <div className="cartitems-header">
          <p>Products</p>
          <p>Price</p>
        </div>
        {isEmptyCart && (
          <div className="empty-cart">
            <Bubbles />
            <div style={{textAlign: "center"}}>
              <p style={{fontSize: "24px", color: "#333"}}>
                Hey, it feels so light!
              </p>
              <p style={{fontSize: "18px", color: "#999"}}>
                There is nothing in your bag. Let's add some items.
              </p>
            </div>
          </div>
        )}
        <hr />
        {cartItems.map((item, index) => (
          <div key={`${item.id}-${item.size}-${index}`}>
            <div className="cartitems-format ">
              <div className="item-img-details">
                <img
                  src={item.image}
                  alt=""
                  className="carticon-product-icon"
                  style={{margin: "auto"}}
                />{" "}
                <div className="item-details">
                  <div className="item-details-top">
                    <p>{item.name}</p>
                    <div className="price-rating-container">
                      <p className="price">
                        <span className="current-price">${item.new_price}</span>
                        <span className="original-price">
                          ${item.old_price}
                        </span>
                      </p>
                    </div>{" "}
                    <div className="cartitems-quantity-controls">
                      <button
                        onClick={() =>
                          handleDecrease(item.id, item.size, item.quantity)
                        }
                        className="qty-btn"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => handleIncrease(item.id, item.size)}
                        className="qty-btn"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="item-Remove">
                    {" "}
                    <p
                      onClick={() => handleRemove(item.id, item.size)}
                      style={{cursor: "pointer"}}
                    >
                      remove
                    </p>
                  </div>
                </div>
              </div>

              <p className="cartitem-Tprice">${calculateTotalPrice(item)}</p>
            </div>
            <hr />
          </div>
        ))}
      </div>
      <div className="cartitemsRight">
        {" "}
        {!isEmptyCart && (
          <div className="cartitems-total ci">
            <h3 className="sidecart-tittle">Cart Total</h3>
            <div>
              <div className="cartitems-total-item">
                <p>Subtotal</p>
                <p>${getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalCartAmount()}</h3>
              </div>
            </div>
            <button>
              {" "}
              <span>Proceed to Checkout</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartItems;
