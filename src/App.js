import {Route} from "react-router-dom";
import Drugs from "./components/drugs/Drugs";
import NavBar from "./components/NavBar";
import {Cart} from "./components/cart/Cart";

function App() {
    return (
        <div className="App">
            <NavBar />
            <Route path='/catalogue' render={() => <Drugs/>}/>
            <Route path='/cart' render={() => <Cart />}/>
        </div>
    );
}

export default App;
