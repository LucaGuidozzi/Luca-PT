import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./Form";
import Scheda from "./Scheda";

function App() {
  return (
    <BrowserRouter>
      {" "}
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/scheda" element={<Scheda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
