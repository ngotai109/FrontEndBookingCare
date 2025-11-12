import React, { useState } from "react";
import "./App.css";
import AppRouters from "./routers";
import { BrowserRouter as Router } from "react-router-dom"
function App() {
  return (
    <Router>
      <AppRouters />
    </Router>
  );

}
export default App;
