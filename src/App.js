import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Admin from "./components/pages/Admin";
import "./scss/styles.scss";

function App() {
  return (
    <div>
      <Router>
        <Admin></Admin>
      </Router>
    </div>
  );
}

export default App;
