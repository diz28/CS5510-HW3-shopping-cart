import React from "react";
import PropTypes from "prop-types";

function Product({ product, addProduct }) {
  return (
    <div className="Product">
      <label>{product.name}</label>
      <label> - ( ${product.price})</label>

      <button
        type="button"
        class="btn btn-success"
        onClick={() => addProduct(product)}
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
