import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";

function App() {
  return (
    <div className="container">
      <img src={logo} alt="logo Aircnc" />
      <div className="content">
        <p>
          Ofereca <strong>spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa
        </p>
        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="id"
            name="id"
            placeholder="Seu melhor email"
          />
          <button className="btn" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
