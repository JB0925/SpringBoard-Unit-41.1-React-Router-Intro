import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from './Vending';
import Sushi from './Sushi';
import Coke from './Coke';
import Chips from './Chips';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/sushi">
          <Sushi />
        </Route>
        <Route exact path="/soda">
          <Coke />
        </Route>
        <Route exact path="/chips">
          <Chips />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
