import React from "react";
import { ItemCount } from "../ItemCount";

export const ItemDetail = (props) => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <div className="card d-flex">
          <p className="lead p-3"> {props.item.title}</p>
          <div className="d-flex">
            <img src={props.item.thumbnail} alt="..." />
            <div className="d-flex flex-column">
              <p className="lead p-3 font-weight-bold">$ {props.item.price}</p>
              <p className="lead p-3"> {props.item.warranty}</p>
            </div>
          </div>
          <ItemCount stock="5" initial="1" />
        </div>
      </div>
    </>
  );
};
