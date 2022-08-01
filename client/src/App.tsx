import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
