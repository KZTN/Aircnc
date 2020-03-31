import React, { useState } from "react";
import api from "../../services/api";

export default function Login({ history }) {
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/sessions", { email });
    localStorage.setItem("user_id", response.data._id);
    console.log(response.data);
    history.push("/dashboard");
  }

  return (
    <>
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
    </>
  );
}
