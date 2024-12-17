import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

function Scheda() {
  const location = useLocation();
  console.log(location.state);
  const { userData, newPost1, newPost2, newPost3, newPost4, newPost5 } =
    location.state || { userData: {} };

  return (
    <div className="scheda-container">
      <h1>Nuova scheda</h1>
      <h3>Nome:</h3> <p> {userData.nome}</p>
      <h3>Numero settimane:</h3>
      <p> {userData.numero}</p>
      <h3>Minuti sessione:</h3> <p> {userData.minuti}</p>
      <h3>Giorni di allenamento: </h3> <p>{userData.giorni}</p>
      <h3>Giorno1: </h3>{" "}
      <ul>
        {newPost1
          .split("\n")
          .map(
            (newPost1, index) =>
              newPost1.trim() && <li key={index}>{newPost1.trim()}</li>
          )}
      </ul>
      <h3>Giorno2:</h3>
      <ul>
        {newPost2
          .split("\n")
          .map(
            (newPost2, index) =>
              newPost2.trim() && <li key={index}>{newPost2.trim()}</li>
          )}
      </ul>
      <h3>Giorno3:</h3>
      <ul>
        {newPost3
          .split("\n")
          .map(
            (newPost3, index) =>
              newPost3.trim() && <li key={index}>{newPost3.trim()}</li>
          )}
      </ul>
      <h3>Giorno4:</h3>{" "}
      <ul>
        {newPost4
          .split("\n")
          .map(
            (newPost4, index) =>
              newPost4.trim() && <li key={index}>{newPost4.trim()}</li>
          )}
      </ul>
      <h3>Giorno5: </h3>
      <ul>
        {newPost5
          .split("\n")
          .map(
            (newPost5, index) =>
              newPost5.trim() && <li key={index}>{newPost5.trim()}</li>
          )}
      </ul>
      <button>Salva</button>
      <button>
        <Link to="/">Nuova</Link>
      </button>
    </div>
  );
}

export default Scheda;
