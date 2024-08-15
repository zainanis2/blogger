import { useState } from "react";

import "./App.css";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Index from "./pages/index";
import Login from "./pages/login";
import Register from "./pages/register";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Index/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
      </Route>
    </Routes>
  );
}

export default App;
