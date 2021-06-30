import { useState, useEffect } from "react";
import { ItemList } from "../ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("./json/products.json");
        const json = await response.json();
        setProducts(json);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      <ItemList products={products} />
    </>
  );
};
