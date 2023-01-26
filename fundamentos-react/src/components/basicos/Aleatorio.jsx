import React from "react";

export default (props) => {
  function randomNumberInterval(a, b) {
    return Math.floor(Math.random() * (b - a) + a);
  }

  //utilizando Distinct com Javascript

    const { valorMaximo, valorMinimo } = props

    
  var aleatorio = randomNumberInterval(valorMinimo, valorMaximo);

  return (
    <>
      <h2>
        O valor gerado entre minimo {valorMinimo} e maximo{" "}
        {valorMaximo} foi {aleatorio}{" "}
      </h2>
    </>
  );
};
