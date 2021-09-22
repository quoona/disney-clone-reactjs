import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Detail from "./components/Detail";
function App() {
  return (
    <div className="App">
      <Router>
        {/* everything inside Rounter will be visible */}
        <Header />
        <Switch>
          {/* everything inside Switch will always change */}
          {/* if path = detail redirect to detail page */}
          <Route path="/detail">
            <Detail />
          </Route>
          <Route path="/">
            {/* if path = home redirect to detail home */}
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
