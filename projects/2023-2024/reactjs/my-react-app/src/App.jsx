import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/fighters">Fighters</Link>
      </nav>
      <nav>
        <a href="/">Home avec la balise a</a>
      </nav>

      <div>Début du outlet</div>
      <Outlet />
      <div>Fin du outlet</div>
    </>
  );
}

export default App;
