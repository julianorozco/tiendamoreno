import React from "react";
import { ItemCount } from "../ItemCount";
import { useState } from "react";
import { Link } from "react-router-dom";

export const ItemDetail = ({ item }) => {
  const [end, setEnd] = useState(null);
  function onAdd() {
    setEnd(".");
  }
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="card d-flex">
          <p className="lead p-3"> {item.title}</p>
          <div className="d-flex">
            <img src={item.pictureUrl} alt="..." />
            <div className="d-flex flex-column">
              <p className="lead p-3 font-weight-bold">$ {item.price}</p>
              <p className="lead p-3"> {item.description}</p>
            </div>
          </div>
          {!end ? (
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          ) : (
            <Link to={`/cart/`} className="text-decoration-none">
              <div className="d-flex justify-content-center align-items-center">
                <button className="btn btn-outline-info">
                  Terminar compra
                </button>
              </div>
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
