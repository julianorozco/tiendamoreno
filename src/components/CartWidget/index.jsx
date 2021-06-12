import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export const CartWidget = () => {
  return (
    <div>
      <a href="-" className="navbar-brand">
        <FontAwesomeIcon icon={faShoppingCart} />
      </a>
    </div>
  );
};
