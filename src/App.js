import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";
import { useState } from 'react';
//import React from "react";
//import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "#042743";
    }

    else {
      setMode("light")
      document.body.style.backgroundColor = "white";
    }
  }
  return (
    <>
      <Router>
        <Navbar title="Text Utility" aboutText="About Us" mode={mode} toggleMode={toggleMode} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/about" element={<About mode = {mode}/>} />
            <Route exact path="/" element={<TextForm title="Try...Text Utility|Word Character Counter|Case conversion|And Many More......." mode={mode}/>} />
            {/* <Route exact path="/contact" element={<www.google.com/>} /> */}
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
