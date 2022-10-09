import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Root from "./pages/Root";
import About from "./pages/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
