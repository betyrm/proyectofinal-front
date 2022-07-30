import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Formulario from "./components/Formulario";
import Main from "./components/Main";
import NavBar from "./components/Navbar";
import Styled from "./components/Styled.jsx";
import Inicio from "./components/Inicio.jsx";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/formulario" element={<Main />} />
          <Route path="/styled" element={<Styled/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
