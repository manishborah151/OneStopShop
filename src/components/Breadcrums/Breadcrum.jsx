import React, {useContext} from "react";
import "./Breadcrum.css";
import {ChevronRight} from "lucide-react";
import {ShopContext} from "../../Context/ShopContext";

const Breadcrum = (props) => {
  const {product} = props;
  const {theme} = useContext(ShopContext);
  return (
    <div className={`breadcrum_${theme}`}>
      HOME <ChevronRight /> SHOP <ChevronRight /> {product.category}{" "}
      <ChevronRight /> {product.name}
    </div>
  );
};

export default Breadcrum;
