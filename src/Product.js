import React from "react";
import Name from "./ProductName";
import Price from "./Price";
import "./index.css";
const Product = () => {
  return (
    <>
      <div className="Product">
        <Name />
        <Price />
      </div>
    </>
  );
};
export default Product;
