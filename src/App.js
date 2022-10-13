import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Header,
  Home,
  About,
  Portfolio,
  Contact,
  Resume,
  Footer,
} from "./components";

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
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
