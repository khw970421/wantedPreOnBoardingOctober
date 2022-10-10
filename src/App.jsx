import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/about" element={<About />}></Route>
        <Route path="/" element={<Root />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
