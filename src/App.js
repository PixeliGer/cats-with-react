import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Home from "./Pages/Home";
import Cats from "./Pages/Cats";
import Navigation from "./UI/Navigation";

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>
    </Router>
  );
}
