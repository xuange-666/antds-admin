// import './App.less';
// import React from 'react';
// import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import { BrowserRouter as Router,Switch} from "react-router-dom";
import { renderRoutes } from "react-router-config";
import routes from "./routes/routes";
import "./App.less"
import Auth from "./utils/Auth";

function App(props) {
  console.log(props)
  return (
    <Router>
      <Switch>
        <Auth></Auth>
      </Switch>
    </Router>
  );
}

export default App;
