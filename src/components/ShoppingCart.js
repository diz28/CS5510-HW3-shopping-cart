import React from "react";
import PropTypes from "prop-types";

function ShoppingCart({ productsInCart }) {
  const total = productsInCart.reduce(
    (pTotal, product) => pTotal + product.price,
    0
  );

  function shoppingCartRender() {
    return (
      <span>
        <h3>Products In Cart</h3>
        {productsInCart.map((p) => (
          <div>
            1 {p.name} (p.price) <button>-</button>
          </div>
        ))}
      </span>
    );
  }

  return (
    <div className="ShoppingCart">
      <h2>Shopping Cart</h2>
      <label>
        Total <output>{total}</output>
      </label>
      {productsInCart.length ? shoppingCartRender : <div>No items yet</div>}
    </div>
  );
}

ShoppingCart.propTypes = {
  productsInCart: PropTypes.number.isRequired,
};

export default ShoppingCart;
