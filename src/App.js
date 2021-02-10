import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  NavLink,
} from "react-router-dom";

import "./App.css";

import Page1 from "./components/pages/page-1/Page1";
import Page2 from "./components/pages/page-2/Page2";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="app-drawer">
          <NavLink to="/page-1" className="app-drawer-link">
            Page 1
          </NavLink>
          <NavLink to="/page-2" className="app-drawer-link">
            Page 2
          </NavLink>
        </div>
        <div className="page-content">
          <div className="header">
            <div className="header-text">This is a header</div>
            <div className="header-hint">
              <div id="root-hint" />
            </div>
          </div>
          <div className="page">
            <Switch>
              <Route exact path="/page-1" component={Page1} />
              <Route exact path="/page-2" component={Page2} />
              <Route path="/">
                <Redirect to="/page-1" />
              </Route>
              <Route path="*">
                <Redirect to="/page-1" />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
