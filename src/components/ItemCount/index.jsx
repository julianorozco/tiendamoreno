import { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState([initial]);
  function add() {
    if (count < stock) {
      setCount(parseInt(count) + 1);
    }
  }
  function substract() {
    if (count > initial) {
      setCount(parseInt(count) - 1);
    }
  }
  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <button className="btn btn-outline-info" onClick={substract}>
          -
        </button>
        <span>{count}</span>
        <button className="btn btn-outline-info" onClick={add}>
          +
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <button
          className="btn btn-outline-info"
          onClick={() => {
            onAdd(count);
          }}
        >
          {" "}
          Agregar al carrito
        </button>
      </div>
    </>
  );
};
