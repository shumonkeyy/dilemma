import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Television from "./pages/Television";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Television />
      <Navbar />
    </>
  );
}

export default App;
