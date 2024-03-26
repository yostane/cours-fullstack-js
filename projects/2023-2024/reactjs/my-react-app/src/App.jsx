import "./App.css";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <Link to="/home">Home</Link>
        {" | "}
        <Link to="/fighters">Fighters</Link>
      </nav>

      <Outlet />
    </>
  );
}

export default App;
