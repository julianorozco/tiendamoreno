import { CardComponent } from "../CardComponent";
import img from "../../img/img";

export const ItemListContainer = () => {
  return (
    <>
      <CardComponent title={"Guantes"} img={img.guantes} price={"150"}/>
      <CardComponent title={"Crema"} img={img.cremas} price={"250"} />
      <CardComponent title={"Ambo"} img={img.ambo} price={"200"} />
      <CardComponent title={"Barbijo"} img={img.barbijo} price={"500"} />
      <CardComponent title={"Apósito"} img={img.aposito} price={"300"} />
      <CardComponent title={"Frasco"} img={img.frasco} price={"100"} />
    </>
  );
};
