import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { Checkout } from "./pages/checkout";
import { Entrance } from "./pages/entrance";
import { Exit } from "./pages/exit";
import { Home } from "./pages/home";

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/entrance">
            <Entrance />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/exit">
            <Exit />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
