import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="d-flex flex-row flex-wrap">
          <ItemListContainer />
        </div>
      </div>
    </>
  );
}
export default App;
