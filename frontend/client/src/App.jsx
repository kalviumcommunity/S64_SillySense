import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import JokeCard from "./components/JokeCard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/joke" element={<JokeCard />} />
      </Routes>
    </Router>
  );
}

export default App;