import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Menus from "../src/Pages/Menus";
import Company from "./Pages/Company";
import Home from "./Components/Home";
import ErorrPage from "./Pages/ErorrPage";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Reservations from "./Pages/Reservations";
function App() {
  return (
    
    <><Router><Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company" element={<Company />} />
        <Route path="/menus" element={<Menus />} />
        <Route path="/reservations" element={<Reservations/>} />
        <Route path="*" element={<ErorrPage />} />
      </Routes>
    </Router><Footer /></>
  );
}

export default App;
