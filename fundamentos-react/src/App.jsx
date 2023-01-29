//referenciando arquivo css

import React from "react";

import "./index.css";

//compontes importados na ordem de baixo para cima.
import Aleatorio from "./components/basicos/Aleatorio";
//Componente com parametro.
import ComParametro from "./components/basicos/ComParametro";

import Fragmento from "./components/basicos/Fragmento";

import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div id="app">
    <h1>Fundamentos React </h1>
    <Aleatorio valorMaximo={5} valorMinimo={12}></Aleatorio>
    <Fragmento />
    <ComParametro
      titulo="Situação do aluno"
      aluno="João"
      nota={7.3} //dessa forma ele vai interpretar o paramet<r>o como um numero.
    />
    <Primeiro></Primeiro>

  </div>
);
