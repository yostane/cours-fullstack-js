import "./App.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function App() {
  return (
    <>
      <h1>React router demo</h1>
      <nav>
        <Link to="/home">Accueil</Link>
        {" - "}
        <Link to="/about">À propos</Link>
        {" - "}
        <Link to="/contact">Contact</Link>
        {" - "}
        <Link to="/todos">todos</Link>
      </nav>
      <Outlet />
    </>
  );
}
