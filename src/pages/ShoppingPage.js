import React, { useState } from "react";
import PropTypes from "prop-types";

import ShoppingCart from "../components/ShoppingCart.js";
import ProductList from "../components/ProductList";

function ShoppingPage() {
  const [products, setProducts] = useState([
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
  ]);

  const [total, setTotal] = useState(0);

  const [productsInCart, setProductsInCart] = useState([]);
  function addProduct(product) {
    setProductsInCart(...productsInCart.concat(product));
  }

  return (
    <div className="ShoppingPage">
      <div>
        <ProductList products={products} addProduct={addProduct}></ProductList>
        <ShoppingCart productsInCart={productsInCart}></ShoppingCart>
      </div>
    </div>
  );
}

ShoppingPage.propTypes = {};

export default ShoppingPage;
