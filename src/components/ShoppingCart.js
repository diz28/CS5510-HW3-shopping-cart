import React, { useState } from "react";
import PropTypes from "prop-types";
import Paginate from "./Paginate";
import "./style.css";

function ShoppingCart({ productsInCart, decProduct, removeProduct }) {
  const arrayProductsInCart = Array.from(productsInCart.entries());

  const total = Array.from(productsInCart.values()).reduce(
    (pTotal, p) => pTotal + p.qty * p.product.price,
    0
  );

  const [curPage, setCurPage] = useState(1);
  const [itemsPerPgae, setItemsPerpage] = useState(10);

  function renderProductsInCart(arrayProductsInCart) {
    return (
      <ul>
        {arrayProductsInCart.map(([name, { product, qty }]) => (
          <li key={"pic_" + name}>
            {qty} {product.name} - (${product.price})
            <button
              type="button"
              onClick={() => decProduct(product)}
              class="decButton"
            >
              -
            </button>
            <button
              type="button"
              onClick={() => removeProduct(product)}
              class="removeButton"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    );
  }

  const page = [];
  for (
    let i = 1;
    i <= Math.ceil(arrayProductsInCart.length / itemsPerPgae);
    i++
  ) {
    page.push(i);
  }

  const indexOfLastItem = curPage * itemsPerPgae;
  const indexOfFirstItem = indexOfLastItem - itemsPerPgae;
  const curItems = arrayProductsInCart.slice(indexOfFirstItem, indexOfLastItem);
  const handleClick = (event) => {
    setCurPage(Number(event.target.id));
  };

  const renderPageNumbers = page.map((number) => {
    return (
      <li
        key={number}
        id={number}
        onClick={handleClick}
        className={curPage === number ? "active" : null}
      >
        {number}
      </li>
    );
  });

  return (
    <>
      <div className="ShoppingCart">
        <h2 class="text-primary">Shopping Cart</h2>
        {productsInCart.size ? (
          renderProductsInCart(curItems)
        ) : (
          <h6 class="text-primary">No products in cart yet</h6>
        )}
        <ul className="pageNumber">{renderPageNumbers}</ul>{" "}
        <h6 class="lead text-center">
          Total: <output> ${total}</output>
        </h6>
      </div>
    </>
  );
}

ShoppingCart.propTypes = {
  productsInCart: PropTypes.object.isRequired,
};

export default ShoppingCart;
