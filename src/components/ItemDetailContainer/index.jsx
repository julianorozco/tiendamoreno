import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(async () => {
    const response = await fetch("/json/products.json");
    const json = await response.json();
    let aux = json.find((element) => element.id === parseInt(id));
    setItem(aux);
  }, [id]);

  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};
