import React from "react";
import { Item } from "../Item";

export const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return <Item product={product} key={product.id} />;
      })}
    </>
  );
};
