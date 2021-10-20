import {Route} from "react-router-dom";
import DrugsContainer from "./components/drugs/DrugsContainer";
import CartContainer from "./components/cart/CartContainer";

function App() {
    return (
        <div className="App">
            <Route path='' render={() => <DrugsContainer/>}/>
            <Route path='/cart' render={() => <CartContainer />}/>
        </div>
    );
}

export default App;
