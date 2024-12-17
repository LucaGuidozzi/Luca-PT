import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Form() {
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [minuti, setMinuti] = useState("");
  const [giorni, setGiorni] = useState("");

  const [newPost1, setNewPost1] = useState("");
  const [newPost2, setNewPost2] = useState("");
  const [newPost3, setNewPost3] = useState("");
  const [newPost4, setNewPost4] = useState("");
  const [newPost5, setNewPost5] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    let userData = {
      nome: nome,
      numero: numero,
      minuti: minuti,
      giorni: giorni,
    };

    console.log(userData);
    console.log(newPost1);
    navigate("/scheda", {
      state: { userData, newPost1, newPost2, newPost3, newPost4, newPost5 },
    });
  }

  return (
    <div className="container">
      <div className="titolo-container">
        <h1>Luca-PT</h1>
        <h3>Applicazione per creare schede di programmazione palestra</h3>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <div className="container-label">
          <label htmlFor="nome">Nome cliente</label>
          <input
            onChange={(e) => setNome(e.target.value)}
            type="text"
            name="nome"
          />
          <label htmlFor="numero">Numero settimane</label>{" "}
          <input
            onChange={(e) => setNumero(e.target.value)}
            type="number"
            name="numero"
          />
          <label htmlFor="minuti">Minuti sessione di allenamento</label>{" "}
          <input
            onChange={(e) => setMinuti(e.target.value)}
            type="number"
            name="minuti"
          />
          <label htmlFor="giorni">Numero di giorni a settimana</label>{" "}
          <input
            onChange={(e) => setGiorni(e.target.value)}
            name="giorni"
            type="number"
          />
        </div>
        <div className="textarea-container">
          <div>
            <h3>Giorno1:</h3>
            <textarea
              placeholder="Scrivi qui i tuoi esercizi..."
              cols={"25"}
              rows={"7"}
              value={newPost1}
              onChange={(e) => setNewPost1(e.target.value)}
            ></textarea>
          </div>
          <div>
            <h3>Giorno2:</h3>
            <textarea
              placeholder="Scrivi qui i tuoi esercizi..."
              cols={"25"}
              rows={"7"}
              value={newPost2}
              onChange={(e) => setNewPost2(e.target.value)}
            ></textarea>
          </div>{" "}
          <div>
            <h3>Giorno3:</h3>
            <textarea
              placeholder="Scrivi qui i tuoi esercizi..."
              cols={"25"}
              rows={"7"}
              value={newPost3}
              onChange={(e) => setNewPost3(e.target.value)}
            ></textarea>
          </div>{" "}
          <div>
            <h3>Giorno4:</h3>
            <textarea
              placeholder="Scrivi qui i tuoi esercizi..."
              cols={"25"}
              rows={"7"}
              value={newPost4}
              onChange={(e) => setNewPost4(e.target.value)}
            ></textarea>
          </div>{" "}
          <div>
            <h3>Giorno5:</h3>
            <textarea
              placeholder="Scrivi qui i tuoi esercizi..."
              cols={"25"}
              rows={"7"}
              value={newPost5}
              onChange={(e) => setNewPost5(e.target.value)}
            ></textarea>
          </div>
        </div>
        <div className="button-container">
          <button type="submit">Conferma</button>
        </div>
      </form>
    </div>
  );
}

export default Form;
