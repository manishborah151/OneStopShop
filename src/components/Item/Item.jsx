import "./Item.css";
import {ShoppingCart, Star} from "lucide-react";
import {Link} from "react-router-dom";
import {ShopContext} from "../../Context/ShopContext";

const Item = (props) => {
  return (
    <div className="product-card">
      <Link to={`/product/${props.id}`} className="product-image-container ">
        <img
          onClick={() => window.scrollTo(0, 0)}
          src={props.image}
          alt={props.name}
          className="product-image"
        />
        {props.discount && (
          <span className="discount-badge">{props.discount}% OFF</span>
        )}
      </Link>
      <div className="product-details">
        <h5 className="product-title">{props.name}</h5>
        <div className="price-rating-container">
          <p className="price">
            <span className="current-price">${props.new_price}</span>
            <span className="original-price">${props.old_price}</span>
          </p>
        </div>
        {/* <Link to={`/product/${props.id}`} className="add-to-cart-btn">
          Add to cart
        </Link> */}
      </div>
    </div>
  );
};

export default Item;
