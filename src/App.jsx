import React from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Register></Register>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/home" element={<Home></Home>}></Route>
    </Routes>

    // <Register />
  );
}

export default App;
