import React from "react";
import ProductCard from "./ProductCard";

const ProductsList = ({ data }) => {
  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <>
      {data.map((item, index) => (
        <ProductCard item={item} key={index} />
      ))}
    </>
  );
};

export default ProductsList;