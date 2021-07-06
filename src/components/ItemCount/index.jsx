import { useState } from "react";

export const ItemCount = ({ stock, initial }) => {
  const [count, setCount] = useState([initial]);
  function onAdd() {
    if (count < stock) {
      setCount(parseInt(count) + 1);
    }
  }
  function onSubstract() {
    if (count > initial) {
      setCount(parseInt(count) - 1);
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-outline-info" onClick={onSubstract}>
          -
        </button>
        <span>{count}</span>
        <button className="btn btn-outline-info" onClick={onAdd}>
          +
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-outline-info"> Agregar al carrito</button>
      </div>
    </>
  );
};
