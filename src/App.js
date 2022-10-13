import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <Router>
      <div className="flex-colum justify-flex-start min-100-vh">
        <Header />
        <div className="page-height container">
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/about"} element={<About />} />
            <Route path={"/portfolio"} element={<Portfolio />} />
            <Route path={"/contact"} element={<Contact />} />
            <Route path={"/resume"} element={<Resume />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
