import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import routers from "./routers";
import "./scss/styles.scss";

function App() {
  const showRouters = (routers) => {
    return routers.map((router, index) => (
      <Route
        key={index}
        path={router.path}
        exact={router.exact}
        component={router.main}
      />
    ));
  };

  return (
    <div>
      <Router>
        <Switch>{showRouters(routers)}</Switch>
      </Router>
    </div>
  );
}

export default App;
