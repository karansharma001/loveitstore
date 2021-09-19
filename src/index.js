import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
