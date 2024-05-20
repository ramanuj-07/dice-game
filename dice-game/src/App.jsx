import Startgame from "./components/Startgame";
import Playgame from "./components/Playgame";
import './App.css'

import { useState } from "react";

function App() {
  const [isGameStarted, setIsGameStarted] = useState(true);

  function toggleGame() {
    setIsGameStarted((prev) => !prev);
  };
 
  return (
    <>
      {isGameStarted ? <Playgame /> : <Startgame toggle={toggleGame} />}
    </>
  );
}

export default App
