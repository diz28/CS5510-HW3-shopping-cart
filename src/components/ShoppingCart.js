import React from "react";
import PropTypes from "prop-types";

function ShoppingCart({ productsInCart }) {
  const total = Array.from(productsInCart.values()).reduce(
    (pTotal, p) => pTotal + p.qty * p.product.price,
    0
  );

  function renderProductsInCart() {
    return (
      <span>
        {Array.from(productsInCart.entries()).map(
          ([name, { product, qty }]) => (
            <div key={"pic_" + name}>
              {qty} {product.name} - (${product.price})
              <button type="button" class="btn btn-danger">
                -
              </button>
            </div>
          )
        )}
      </span>
    );
  }

  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      <label>
        Total: <output> ${total}</output>
      </label>
      {productsInCart.size ? (
        renderProductsInCart()
      ) : (
        <div>No products in cart yet</div>
      )}
    </div>
  );
}

ShoppingCart.propTypes = {
  productsInCart: PropTypes.object.isRequired,
};

export default ShoppingCart;
