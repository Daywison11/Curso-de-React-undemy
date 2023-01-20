//referenciando arquivo css
import { ReactDOM } from "react";
import React from "react";

import "./index.css";

import Primeiro from "./components/basicos/Primeiro";
//Componente com parametro.
import ComParametro from "./components/basicos/ComParametro";

import Fragmento from "./components/basicos/Fragmento";

export default (_) => (
  <div>
    <h1>Fundamentos React </h1>
    <Fragmento />
    <ComParametro
      titulo="Situação do aluno"
      aluno="João"
      nota={7.3} //dessa forma ele vai interpretar o paramet<r>o como um numero.
    />
    <Primeiro></Primeiro>
  </div>
);
