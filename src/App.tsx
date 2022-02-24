import React from "react";
import { Routes, Route } from "react-router-dom";
import { Dashboard, TradingTools } from "containers";
import "./App.css";
import { SideMenu } from "./components/sideMenu/Loadable";

function App() {
  return (
    <div className="App">
      <SideMenu>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/tools" element={<TradingTools />} />
        </Routes>
      </SideMenu>
    </div>
  );
}

export default App;
