import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Home from './Home';
import Edit from './Edit';
import Photos from './Photos';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route component={Home} path="/" exact />
          <Route component={Edit} path="/edit/product/:id" exact />
          <Route component={Photos} path="/images/product/:id" exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
