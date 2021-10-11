import {Route} from "react-router-dom";
import DrugsContainer from "./components/drugs/DrugsContainer";

function App() {
  return (
    <div className="App">
      <Route path='' render={() => <DrugsContainer />}/>
    </div>
  );
}

export default App;
