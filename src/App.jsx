import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Story from "./pages/Story";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Television from "./pages/Television";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Router>
        <Routes>
          <Route>
            <Route path="/" element={<Television />} />
            <Route path="/next" element={<Story />} />
          </Route>
        </Routes>
      </Router> */}
      <div>
        <Television />
      </div>
    </>
  );
}

export default App;
