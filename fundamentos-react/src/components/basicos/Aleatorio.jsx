import React from "react";

export default (props) => {
  function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  }
  
  //utilizando Distinct com Javascript
  const { valorMaximo, valorMinimo } = props

  const aleatorio = randomNumberInterval(valorMinimo, valorMaximo);

  return (
    <div>
      <h2> Valor Aleatorio</h2>
      <p>
        <strong>valor minimo: </strong> {valorMinimo}
      </p>
      <p>
        <strong>valor maximo: </strong> {valorMaximo}        
      </p>
      <p>
        <strong>valor escolhido: </strong> {aleatorio}        
      </p>
    </div>
  );
};
