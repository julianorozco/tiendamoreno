import { useState, useEffect } from "react";
import { ItemDetail } from "../ItemDetail";

export const ItemDetailContainer = (props) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    fetch("https://api.mercadolibre.com/items/MLA800264201")
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log(data);
      });
  }, []);
  return (
    <>
      <ItemDetail item={product} />
    </>
  );
};
