import React, { useState } from "react";
import { productsDropdown } from "./NavItems";
import { Link } from "react-router-dom";
import "./ProductDropdown.css";

function ProductDropdown() {
  const [productDropdown, setProductDropdown] = useState(false);

  return (
    <>
      <ul
        className={productDropdown ? "products-submenu clicked" : "products-submenu"}
        onClick={() => setProductDropdown(!productDropdown)}
      >
        {productsDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setProductDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ProductDropdown;
