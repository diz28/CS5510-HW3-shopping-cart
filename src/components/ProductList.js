import React from "react";
import PropTypes from "prop-types";

import Product from "./Product.js";
import Paginate from "./Paginate.js";

function ShoppingPage({ products, addProduct }) {
  const renderData = (products) => {
    return (
      <ul>
        {products.map((item, index) => {
          return (
            <li key={index}>
              {/* {item.name} - ${item.price} */}
              <Product
                key={"product" + index}
                product={item}
                addProduct={addProduct}
              ></Product>
            </li>
          );
        })}
      </ul>
    );
  };
  return (
    <div>
      <h2 class="text-danger">Store</h2>
      <Paginate products={products} addProduct={addProduct}></Paginate>
    </div>
  );
}

ShoppingPage.propTypes = {
  products: PropTypes.array.isRequired,
  addProduct: PropTypes.func.isRequired,
};

export default ShoppingPage;
