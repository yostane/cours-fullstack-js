import { useState } from "react";
import Header from "../components/Header";
import Hello from "../components/Hello";
import Counter from "../components/Counter";
import StreetFigherList from "../components/StreetFighterList";

export default function HomePage() {
  const [increment, setIncrement] = useState(1);
  return (
    <>
      <Header />
      <Hello />
      <div style={{ display: "flex" }}>
        <input
          style={{ flex: "auto" }}
          value={increment}
          onChange={(e) => setIncrement(+e.target.value)}
          required
        />
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
