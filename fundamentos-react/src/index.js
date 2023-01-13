import ReactDom from 'react-dom';
//importação para funcionar a sintaxe JSX
import React from 'react';

//referenciando arquivo css 
import './index.css';

//importando components
import Prrimeiro from './components/basicos/Primeiro';


ReactDom.render(
    <div> 
        
        <Prrimeiro></Prrimeiro>
        
    </div>,
    document.getElementById('root')
    )
