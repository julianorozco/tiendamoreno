import { Link } from "react-router-dom";

export const Item = ({ product }) => {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <Link to={`/item/${product.id}`} className="text-decoration-none">
            <h4 className="card-title">{product.title}</h4>
            <img src={product.pictureUrl} alt="" />
            <h5 className="d-flex justify-content-center align-items-center">
              ${product.price}
            </h5>
          </Link>
        </div>
      </div>
    </>
  );
};
