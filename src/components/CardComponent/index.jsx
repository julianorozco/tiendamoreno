import { ItemCount } from "../ItemCount";

export const CardComponent = ({ title, img, price }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{title}</h4>
        <img src={img} alt="" />
        <h5 className="d-flex justify-content-center align-items-center">
          ${price}
        </h5>
        <ItemCount stock="5" initial="1" />
      </div>
    </div>
  );
};
