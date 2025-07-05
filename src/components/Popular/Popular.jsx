import React from "react";
import "./Popular.css";
import data_product from "../../assets/data";
import Item from "../Item/Item";
import {ShopContext} from "../../Context/ShopContext";

const Popular = () => {
  return (
    <div className="popular">
      <h1 className="h1p">NEW ARIVALS</h1>
      <hr className="hrp" />
      <div className="popular-item">
        {data_product.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
