import React, { useState } from "react";
import PropTypes from "prop-types";

import ShoppingCart from "../components/ShoppingCart.js";
import ProductList from "../components/ProductList";
import ReactPaginate from "react-paginate";
import Paginate from "../components/Paginate.js";

function ShoppingPage() {
  const [pageCount, setPageCount] = useState(0);

  const [products, setProducts] = useState([
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
    { name: "watermalon", price: 30 },
    { name: "straberry", price: 10 },
    { name: "peach", price: 70 },
  ]);

  const [productsInCart, setProductsInCart] = useState(new Map());

  function addProduct(product) {
    const newProductsInCart = new Map(productsInCart);

    let currentQty = newProductsInCart.get(product.name);
    if (currentQty === undefined) {
      currentQty = { product: product, qty: 0 };
    }
    currentQty.qty += 1;

    newProductsInCart.set(product.name, currentQty);
    setProductsInCart(newProductsInCart);
  }

  return (
    <div className="ShoppingPage" class="container">
      <div class="row">
        <div class="col">
          <Paginate products={products} />
          <ProductList
            products={products}
            addProduct={addProduct}
          ></ProductList>
        </div>
        <div class="col">
          <ShoppingCart
            class="col"
            productsInCart={productsInCart}
          ></ShoppingCart>
        </div>
      </div>
    </div>
  );
}

ShoppingPage.propTypes = {};

export default ShoppingPage;
