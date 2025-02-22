import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Television from "./pages/Television";
import CaseInfo from "./pages/CaseInfo";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route>
              <Route path="/" element={<Television />} />
              <Route path="/case-info" element={<CaseInfo />} />
            </Route>
          </Routes>
        </Router>
        <Television />
      </div>
    </>
  );
}

export default App;
