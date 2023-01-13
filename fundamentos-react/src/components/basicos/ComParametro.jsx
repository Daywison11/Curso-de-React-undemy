import React from "react"

//os parametros que colocamos no elemento vem para o componente como objeto para o parametro, que no caso é props.
export default function ComParametro(props) {

    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'
    const sub = props.subtitulo
    return (
        <div>
            <h2>{ props.titulo }</h2>
            <p><stron>{props.aluno}</stron> tem a nota { props.nota } e esta {status} </p>
        </div>
    )
}