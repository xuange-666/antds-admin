// import './App.less';
// import React from 'react';
// import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { BrowserRouter as Router} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes/routes";

function App() {
  return (
    <Router>
      {
        renderRoutes(routes)
      }
    </Router>
  );
}

export default App;
