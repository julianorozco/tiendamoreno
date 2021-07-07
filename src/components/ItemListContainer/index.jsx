import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/json/products.json");
      const json = await response.json();
      let aux = id ? json.filter((element) => element.category === id) : json;
      setProducts(aux);
    }
    fetchData();
  }, [id]);
  return (
    <>
      <div className="container">
        <div className="d-flex flex-row flex-wrap">
          <ItemList products={products} />
        </div>
      </div>
    </>
  );
};
