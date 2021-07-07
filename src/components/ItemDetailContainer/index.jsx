import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/json/products.json");
      const json = await response.json();
      let aux = json.find((element) => element.id === parseInt(id));
      setItem(aux);
    }
    fetchData();
  }, [id]);
  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};
