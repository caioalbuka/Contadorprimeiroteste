import React, { useState } from "react";
import "./App.css";

function App() {
  const [valor, setValor] = useState(0);

  function addItem() {
    setValor(valor + 1);
  }
  function removeItem() {
    setValor(valor - 1);
  }

  return (
    <div className="container">
      <div className="title">
        Quantidade de Produtos no Carrinho:<b>{valor}</b>
      </div>
      <div className="buttons">
        <button onClick={addItem}>Adicionar no Carrinho</button>
        <button onClick={removeItem}>Remover do Carrinho</button>
      </div>
    </div>
  );
}

export default App;
