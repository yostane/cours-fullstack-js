import "./App.css";
import Hello from "./components/Hello";
import MessageShow from "./components/MessageShow";

function App() {
  return (
    <>
      <Hello />
      <MessageShow message="I 💖 JavaScript" />
      <h1>Hello 2024 react</h1>
      <MessageShow message="I 💖 react" />
    </>
  );
}

export default App;
