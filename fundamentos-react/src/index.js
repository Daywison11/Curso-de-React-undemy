import ReactDom from "react-dom";
//importação para funcionar a sintaxe JSX
import React, { Fragment } from "react";

import App from "./App";
//importando components

ReactDom.render(
  <App />,

  document.getElementById("root")
);
