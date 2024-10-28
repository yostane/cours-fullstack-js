import { useState } from "react";
import "./App.css";
import ExoCount from "./components/ExoCounter";
import ExoLowerCase from "./components/ExoLowerCase";
import Hello from "./components/Hello";
import MessageShow from "./components/MessageShow";
import StateDemo from "./components/StateDemo";
import EuroToYen from "./components/EuroToYen";
import ShowMax from "./components/ShowMax";
import CountConsonantsAndVowels from "./components/CountConsonantsAndVowels";

function App() {
  const [inputText, setInputText] = useState("Hello");
  return (
    <>
      <Hello />
      <MessageShow message="I 💖 JavaScript" />
      <h1>Hello 2024 react</h1>
      <MessageShow message="I 💖 react" />
      <StateDemo />
      <StateDemo />
      Input Text:{" "}
      <input
        type="text"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
      />
      <h1>Exercices</h1>
      <ul>
        <li>
          Exerice 1: <ExoCount />
        </li>
        <li>
          Exerice 2: <ExoLowerCase text="BonJour" />
          From Input Text: <ExoLowerCase text={inputText} />
        </li>
        <li>
          Exerice 3: <EuroToYen />
        </li>
        <li>
          Exerice 4: <ShowMax a={2} b={10} />
        </li>
        <li>
          Exerice 6: <CountConsonantsAndVowels word={inputText} />
        </li>
      </ul>
    </>
  );
}

export default App;
