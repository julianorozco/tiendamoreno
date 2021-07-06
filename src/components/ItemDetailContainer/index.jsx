import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail";

export const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const {id} = useParams ();
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/json/products.json");
        const json = await response.json();
        let aux = id ? json.find (element => element.id===id) :json
        setItem(aux);
      } catch (e) {
        console.error(e);
      }
    }
    fetchData();
  }, [id]);
  return (
    <>
      <ItemDetail item={item} />
    </>
  );
};

// import { useState, useEffect } from "react";
// import { ItemDetail } from "../ItemDetail";

// export const ItemDetailContainer = (props) => {
//   const [products, setProducts] = useState([]);
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         const response = await fetch("./json/products.json");
//         const json = await response.json();
//         setProducts(json);
//       } catch (e) {
//         console.error(e);
//       }
//     }
//     fetchData();
//   }, []);
//   return (
//     <>
//       <ItemDetail item={products} />
//     </>
//   );
// };

