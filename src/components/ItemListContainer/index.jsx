import { useState, useEffect } from "react";
import { ItemList } from "../ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const response = await fetch("./json/products.json");
    const json = await response.json();
    setProducts(json);
  }, []);
  return (
    <>
        <ItemList products={products} />
    </>
  );
};
