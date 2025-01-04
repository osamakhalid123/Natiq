import "./App.css";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";

function App() {
  return (
    <>
      <NavbarComponent />

      <Button variant="primary">Primary</Button>
    </>
  );
}

export default App;
