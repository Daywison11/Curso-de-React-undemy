import ReactDom from 'react-dom';
//importação para funcionar a sintaxe JSX
import React, { Fragment } from 'react';

//referenciando arquivo css 
import './index.css';

//importando components
import Primeiro from './components/basicos/Primeiro';
//Componente com parametro.
import ComParametro from './components/basicos/ComParametro';

import Fragmento from './components/basicos/Fragmento';

ReactDom.render(
    <div> 
        <Primeiro></Primeiro>
        <ComParametro
            titulo="Situação do aluno"
            aluno="João"
            nota={7.3} //dessa forma ele vai interpretar o parametro como um numero.
        />

        <Fragmento/>
        

    </div>,
    document.getElementById('root')
    )
