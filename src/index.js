import React from "react";
// importação do react
import ReactDOM from "react-dom";
// importação do react-dom no react
import App from "./App";
// importação do App no diretório App

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
// nesse código está utilizando o ReactDOM.render no qual está fornecendo métodos específicos para o DOM ; dentro deletemos o ReactStrictMode, no qual é uma ferramenta para sinalizar potenciais problemas em uma aplicação
