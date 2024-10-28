import "./App.css";
import ExoCount from "./components/ExoCounter";
import ExoLowerCase from "./components/ExoLowerCase";
import Hello from "./components/Hello";
import MessageShow from "./components/MessageShow";
import StateDemo from "./components/StateDemo";

function App() {
  return (
    <>
      <Hello />
      <MessageShow message="I 💖 JavaScript" />
      <h1>Hello 2024 react</h1>
      <MessageShow message="I 💖 react" />
      <StateDemo />
      <StateDemo />
      <h1>Exercices</h1>
      <ul>
        <li>
          Exerice 1: <ExoCount />
        </li>
        <li>
          Exerice 2: <ExoLowerCase text="BonJour" />{" "}
          <ExoLowerCase text="HellO woRLd" />
        </li>
        <li>Exerice 3</li>
        <li>Exerice 4</li>
      </ul>
    </>
  );
}

export default App;
