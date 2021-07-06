import { ItemCount } from "../ItemCount";

export const Item = ({ product }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{product.title}</h4>
        <img src={product.pictureUrl} alt="" />
        <h6>{product.description}</h6>
        <h5 className="d-flex justify-content-center align-items-center">
          ${product.price}
        </h5>
        <ItemCount stock="5" initial="0" />
      </div>
    </div>
  );
};
