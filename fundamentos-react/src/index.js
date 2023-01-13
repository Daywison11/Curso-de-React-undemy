import ReactDom from 'react-dom';
//importação para funcionar a sintaxe JSX
import React from 'react';

//referenciando arquivo css 
import './index.css';

//importando components
import Prrimeiro from './components/basicos/Primeiro';
//Componente com parametro.
import ComParametro from './components/basicos/ComParametro';


ReactDom.render(
    <div> 
        <Prrimeiro></Prrimeiro>
        <ComParametro
            titulo="Situação do aluno"
            aluno="João"
            nota={7.3} //dessa forma ele vai interpretar o parametro como um numero.
        />

    </div>,
    document.getElementById('root')
    )
