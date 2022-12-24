import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import RegistrationForm from "./components/RegistrationForm";
import Navbar from "./components/Navbar";
import DisplayTable from "./components/DisplayTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<RegistrationForm />} />
        <Route path="/display" element={<DisplayTable />} />
      </Routes>
    </div>
  );
}

export default App;
