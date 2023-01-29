//referenciando arquivo css

import React from "react";

import "./index.css";

//compontes importados na ordem de baixo para cima.
import Card from "./components/layout/Card";
import Aleatorio from "./components/basicos/Aleatorio";
import ComParametro from "./components/basicos/ComParametro";
import Fragmento from "./components/basicos/Fragmento";
import Primeiro from "./components/basicos/Primeiro";

export default () => (
  <div id="app">
    <h1>Fundamentos React </h1>

    <Card titulo="#04 - Desafio aleatorio">
      <Aleatorio valorMaximo={5} valorMinimo={12}></Aleatorio>
    </Card>
    <Card titulo="#03 - Fragmento">
      <Fragmento />
    </Card>
    <Card titulo="#02 - Com Parametro">
      <ComParametro
        titulo="Situação do aluno"
        aluno="João"
        nota={7.3} //dessa forma ele vai interpretar o paramet<r>o como um numero.
      />
    </Card>
    <Card titulo="#01 - Primeiro componente">
      <Primeiro></Primeiro>
    </Card>
  </div>
);
