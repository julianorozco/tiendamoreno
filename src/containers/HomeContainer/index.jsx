import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "../../components/NavBar";
import { ItemListContainer } from "../../components/ItemListContainer";

export const HomeContainer = () => {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
    </div>
  );
};
