import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <ItemDetailContainer />
    </>
  );
}
export default App;
