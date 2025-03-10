import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MantineProvider } from "@mantine/core";
import Home from "./Components/Home";
import Header from "./Components/Header";
import GetInvolved from "./Components/GetInvolved";
import "./App.css";

function App() {
  return (
    <MantineProvider>
      <Router>
        <div className="bg-[#161619] text-white min-h-screen">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/get-involved" element={<GetInvolved />} />
          </Routes>
        </div>
      </Router>
    </MantineProvider>
  );
}

export default App;
