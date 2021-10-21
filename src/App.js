import {Route} from "react-router-dom";
import DrugsContainer from "./components/drugs/DrugsContainer";
import CartContainer from "./components/cart/CartContainer";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Route path='/catalogue' render={() => <DrugsContainer/>}/>
            <Route path='/cart' render={() => <CartContainer />}/>
        </div>
    );
}

export default App;
