import { useState } from "react";

export default function EuroToYen() {
  const [euro, setEuro] = useState(0);
  const yen = euro * 165;
  return (
    <>
      <label htmlFor="euro">Euros</label>
      <input
        type="number"
        name="euro"
        value={euro}
        onChange={(event) => setEuro(event.target.value)}
      />
      Yen: {yen}
    </>
  );
}
