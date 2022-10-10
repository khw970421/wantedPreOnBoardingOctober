import { useState } from "react";
import "./App.css";
import Root from "./pages/Root";
import About from "./pages/About";
import Router from "./components/Router";
import Route from "./components/Route";

function App() {
  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
}

export default App;
