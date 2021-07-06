import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { ItemListContainer } from "./components/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetailContainer";
import { NavBar } from "./components/NavBar";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <>
       <BrowserRouter> 
        <NavBar />
        <Switch>
          <Route exact path="/">
            <ItemListContainer />
          </Route>
          <Route path="/category/:id">
            <ItemListContainer />
          </Route>
          <Route path="/item/:id"> 
           <ItemDetailContainer /> 
           </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default App;
