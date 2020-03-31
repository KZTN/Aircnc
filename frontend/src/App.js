import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import api from "./services/api";

function App() {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/sessions", { email });
    console.log(response.data);
  }

  return (
    <div className="container">
      <img src={logo} alt="logo Aircnc" />
      <div className="content">
        <p>
          Ofereca <strong>spots</strong> para programadores e encontre{" "}
          <strong>talentos</strong> para sua empresa
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input
            type="email"
            id="id"
            name="id"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
