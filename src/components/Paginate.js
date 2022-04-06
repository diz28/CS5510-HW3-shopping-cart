import React, { useState } from "react";
import "./style.css";
import Product from "./Product";

function Paginate({ products, addProduct }) {
  const renderData = (products) => {
    return (
      <ul>
        {products.map((item, index) => {
          return (
            <li key={index}>
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

  const [curPage, setCurPage] = useState(1);
  const [itemsPerPgae, setItemsPerpage] = useState(10);

  const handleClick = (event) => {
    setCurPage(Number(event.target.id));
  };

  const page = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPgae); i++) {
    page.push(i);
  }

  const indexOfLastItem = curPage * itemsPerPgae;
  const indexOfFirstItem = indexOfLastItem - itemsPerPgae;
  const curItems = products.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumber = page.map((number) => {
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
      {renderData(curItems)}
      <ul className="pageNumber">{renderPageNumber}</ul>
    </>
  );
}

export default Paginate;
