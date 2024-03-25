import "./App.css";
import Counter from "./components/Counter";
import Hello from "./components/Hello";
import Header from "./components/Header";
import { useState } from "react";
import StreetFigherList from "./components/StreetFighterList";
import FirebaseDemo from "./components/FirebaseDemo";

function App() {
  const [increment, setIncrement] = useState(1);
  return (
    <>
      <Header />
      <Hello />
      <FirebaseDemo />
      <input
        value={increment}
        onChange={(e) => setIncrement(+e.target.value)}
        required
      />
      <div style={{ display: "flex" }}>
        <Counter
          style={{ flex: "auto" }}
          initialValue={10}
          increment={increment}
        />
        <Counter style={{ flex: "auto" }} initialValue={-30} increment={1} />
      </div>
      <h2>Boucle for</h2>
      <StreetFigherList treshold={increment} />
    </>
  );
}

export default App;
