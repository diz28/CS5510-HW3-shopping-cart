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
    { name: "coffee", price: 30 },
    { name: "gift card", price: 10 },
    { name: "wallet", price: 70 },
    { name: "plante", price: 30 },
    { name: "laptop", price: 10 },
    { name: "lamp", price: 70 },
    { name: "calender", price: 30 },
    { name: "camera", price: 10 },
    { name: "glasses", price: 70 },
    { name: "pants", price: 30 },
    { name: "jacket", price: 10 },
    { name: "sneaker", price: 70 },
    { name: "bed", price: 30 },
    { name: "pillow", price: 10 },
    { name: "dice", price: 70 },
    { name: "speaker", price: 30 },
    { name: "slippers", price: 10 },
    { name: "iPhone", price: 70 },
    { name: "underwear", price: 30 },
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
  function decProduct(product) {
    const newProductsInCart = new Map(productsInCart);

    let currentQty = newProductsInCart.get(product.name);
    if (currentQty === undefined) {
      currentQty = { product: product, qty: 0 };
    }
    if (currentQty.qty > 1) {
      currentQty.qty -= 1;
      newProductsInCart.set(product.name, currentQty);
    } else {
      newProductsInCart.delete(product.name, currentQty);
    }

    setProductsInCart(newProductsInCart);
  }
  function removeProduct(product) {
    const newProductsInCart = new Map(productsInCart);

    let currentQty = newProductsInCart.get(product.name);
    if (currentQty === undefined) {
      currentQty = { product: product, qty: 0 };
    }
    newProductsInCart.delete(product.name, currentQty);
    setProductsInCart(newProductsInCart);
  }

  return (
    <div className="ShoppingPage" class="container">
      <div class="row">
        <div class="col">
          <ProductList products={products} addProduct={addProduct} />
        </div>
        <div class="col">
          <ShoppingCart
            class="col"
            productsInCart={productsInCart}
            decProduct={decProduct}
            removeProduct={removeProduct}
          ></ShoppingCart>
        </div>
      </div>
    </div>
  );
}

ShoppingPage.propTypes = {};

export default ShoppingPage;
