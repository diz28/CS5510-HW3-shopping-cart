import React from "react";
import PropTypes from "prop-types";
import "./style.css";
function Product({ product, addProduct }) {
  return (
    <div className="Product">
      <label>{product.name}</label>
      <label> - ( ${product.price})</label>

      <button
        type="button"
        onClick={() => addProduct(product)}
        className="addButton"
      >
        Add to cart
      </button>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default Product;
