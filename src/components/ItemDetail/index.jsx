import React from "react";
import { ItemCount } from "../ItemCount";
import { Link } from "react-router-dom";

export const ItemDetail = (item) => {
  return (
    <>
      <div className="container d-flex justify-content-center">
        <Link to={`/${item.item}/${item.id}`}>
          <div className="card d-flex">
            <p className="lead p-3"> {item.title}</p>
            <div className="d-flex">
              <img src={item.pictureUrl} alt="..." />
              <div className="d-flex flex-column">
                <p className="lead p-3 font-weight-bold">$ {item.price}</p>
                <p className="lead p-3"> {item.description}</p>
              </div>
            </div>
            <ItemCount stock="5" initial="0" />
          </div>
        </Link>
      </div>
    </>
  );
};
