import "bootstrap/dist/css/bootstrap.min.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import Natiq from "./pages/Natiq";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <Router>
      <NavbarComponent />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/natiq" element={<Natiq />} />
      </Routes>
    </Router>
  );
}

export default App;
